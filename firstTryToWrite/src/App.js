import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import NavigationBar from './views/bodyViews/NavigationBar'
import Main from './views/bodyViews/Main'
import Footer from './views/bodyViews/Footer'
import Navigator from './views/bodyViews/sideNavigator'
import Header from './views/bodyViews/Header'
import Paperbase from './views/bodyViews/paperBase'


class App extends Component {
  render() {
    return (
      <div>
        <Paperbase />
      </div>
    );
  }
}

export default App;
