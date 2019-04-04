import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Switch, Route, Redirect } from 'react-router-dom'
import Home from '../maniViews/Home';
import About from '../maniViews/About';
import TheMovieDb from '../maniViews/TheMovieDb';
import OnlineShop from '../maniViews/OnlineShop';


class Main extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
  
                <BrowserRouter>  
                <Switch>
                    <Route path='/home'component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/theMovieDb' component={TheMovieDb}/>
                    <Route path='/onlineShop' component={OnlineShop}/>
                    <Redirect from="/" to="/home" />
                </Switch>
                </BrowserRouter>

        );
    }
}
export default Main;