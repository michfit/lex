import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
//import StudentTeacher from './views/studentTeacher/index.js';
import {BrowserRouter, Route} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="App">
            <Home />
          </div>
        </div>
      </BrowserRouter>
      );
  }
  
}

export default App;
