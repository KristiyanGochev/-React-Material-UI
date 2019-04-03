import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import PrimarySearchAppBar from './views/NavTabs';
import PersistentDrawerLeft from './views/Drawer'

class App extends Component {
  render() {
    return (
      <div>
        <PersistentDrawerLeft/>
      </div>
    );
  }
}

export default App;
