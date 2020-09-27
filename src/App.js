import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DivIndex from './body/DivIndex.js';
import Footer from './footer/Footer.js';

//import { Button, ButtonToolbar } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a className="App-link" href="https://reactjs.org"
            target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <DivIndex>
          </DivIndex>
          <Footer></Footer>
        </header>
      </div>
    );
  }
}

export default App;