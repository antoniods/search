import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Recherche from './Home.js';
import Visualizza from './Visualizza';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <p>
            Application <code>TEST</code> 
          </p>        
          <Recherche/>  
          <Visualizza/>
        </header>

        


      </div>
    );
  }
}

export default App;
