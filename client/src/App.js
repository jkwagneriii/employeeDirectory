import './App.css';
import React, {useState} from 'react'
// import axios from "axios";
// import Navbar from "./components/Navbar"
import Card from "./components/Card";

function App() {

  const [employeeState] = useState ({
    peeps: [
      {name: 'Jane', email: 'jane@example.com', phone: '888-888-8888'},
      {name: 'Bob', email: 'bob@example.com', phone: '555-555-5555'},
      {name: 'Stew', email: 'stew@example.com', phone: '777-777-7777'}
    ],
    //I can use this for some sort of specific sorting, by last name for instance. 
    peepsArray: []
  })
  
  let something = employeeState.peeps
 

  return (
    <div className="App">
      <header className="App-header">
        <p>Here ye find, React</p>
        <div>
          {something.map(() => {
            return <Card name={something.name}/>
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
