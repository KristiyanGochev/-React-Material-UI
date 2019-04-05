import React, { Component } from 'react';
export default class extends Component{
  state ={
    writers:[]
  }
  componentDidMount(){
    fetch('http://localhost:4000/writers')
    .then(res => res.json())
    .then(writers =>this.setState({writers}))
  }
render(){
  return<div>
     123</div>
  
}
}

