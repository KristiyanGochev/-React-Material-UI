import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import NavigationBar from './views/NavigationBar'
import Main from './views/Main'
import Footer from './views/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
