import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./screens/Login";
import { Register } from "./screens/Register";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './screens/Dashboard';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
} 


export default App;



