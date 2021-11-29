import React from "react";
import './App.css';
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
       <header>
         <h1>Alexa's Todo List</h1>
         <Form />
       </header>
    </div>
  );
}

export default App;
