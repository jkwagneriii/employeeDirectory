import './App.css';
import React, {useState} from 'react'
import Navbar from "./components/Navbar"
import TableHead from './components/TableHead/TableHead'
import Card from "./components/Card";
import empData from './utils/empData.json'
import operators from './utils/utils'

function App() {

  const [employeeState, setState] = useState ({
    peeps: empData,
    //I can use this for some sort of specific sorting, by last name for instance. 
    filtered: [],
    asc: false
  })

  //Handle user input and push peeps into a newPeepsArray if the name matches up with a name from the empData.json
  const handleTyping = (event) => {
    let newPeepsArray = []

    employeeState.peeps.map((person) => {
      //The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.
      if(event.target.value == person.name.first.substring(0, event.target.value.length).toLowerCase()) {
        newPeepsArray.push(person);
      }
    })
    setState({...employeeState, filtered: newPeepsArray})
  };

  //Perhaps useEffect to get the info from the empData.json
  empData.map((empDetail, index) => {
    return empDetail.name.title.first 
  })

 //https://stackoverflow.com/questions/47998188/how-to-sort-an-object-alphabetically-within-an-array-in-react-js 
 //The user will be able to click on the name button from the TableHead to flip flop the sorting of names alphabetically.
 function sortName() {
   let sortOrder
    if(employeeState.asc === true) {
      sortOrder = '+'
    } else {
      sortOrder = '-'
    }

   let tempPeeps = employeeState.peeps
    if(employeeState.filtered.length > 0) {
      tempPeeps = employeeState.filtered
    }

   //Be weary sort() modifies original array, avoid this by using slice()
   let sortedPeeps = tempPeeps.slice().sort(operators[sortOrder])

   setState({...employeeState, asc: !employeeState.asc, filtered: sortedPeeps});
 };

 //There must be a variable to to store our data to display in so that we can change the state based on what the user is typing into the search bar
 let dataDisplay = employeeState.peeps

 if(employeeState.filtered.length > 0) {
   dataDisplay = employeeState.filtered
 }
 
  return (
    <div className="App">
        <Navbar />
        <p>Search Employee Name:  
        <input onChange={handleTyping}></input>
        </p>
        <TableHead sortName={sortName}/>
          <div>
            {dataDisplay.map((person) => {
              return <Card 
              image={person.picture.thumbnail}
              name={person.name.first}
              email={person.email}
              cell={person.cell}
              />
            })}
          </div>
    </div>
  );
}

export default App;
