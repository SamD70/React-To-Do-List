import React, { useState } from "react";
import './App.css';
//Importing Components
import Form from "./components/Form";
import TodoList from "./components/To-do list";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Sam's To-Do list</h1>
      </header>
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
      />
      <TodoList 
      setTodos={setTodos}
      todos={todos}
      />
    </div>
  );
}

export default App;
