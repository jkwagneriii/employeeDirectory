import './App.css';
import React, {useState, useEffect} from 'react'
import axios from "axios";
// import Navbar from "./components/Navbar"
// import EmployeeCard from "./components/EmployeeCard";

function App() {

  const [employeeState, setEmployeeState] = useState ({
    peeps: [
      {name: 'Jane', email: 'jane@example.com', phone: '888-888-8888'},
      {name: 'Bob', email: 'bob@example.com', phone: '555-555-5555'},
      {name: 'Stew', email: 'stew@example.com', phone: '777-777-7777'}
    ],
    //I can use this for some sort of specific sorting, by last name for instance. 
    peepsArray: []
  })



  return (
    <div className="App">
      <header className="App-header">
        <p>Here ye find, React</p>
        <div>

        </div>
      </header>
    </div>
  );
}

export default App;
