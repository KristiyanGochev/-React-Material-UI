import React, { Component, Fragment } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Writers from "./Writers"
import {NotFound} from "./Errors"
import Layout from '../Layout';

export default class extends Component{
  state ={
    writers:[]
  }
  async componentDidMount(){
    const writers =  await (await fetch('http://localhost:4000/writers?_embed=texts')).json();
    this.setState({writers})

  }
render(){
  return <BrowserRouter>
    <Layout writers = {this.state.writers}>
      <Switch writers = {this.state.writers} >
          <Route exact path="/" render={()=> <div> Home </div>} />
          <Route path="/writers" render={
            props => <Writers{ ...props} writers={this.state.writers}/>} />      
          <Route component={NotFound}/>
      </Switch>    
    </Layout>
  </BrowserRouter>
  
}
}

