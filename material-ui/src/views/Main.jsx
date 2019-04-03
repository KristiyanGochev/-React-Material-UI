import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Switch, Route } from 'react-router-dom'
import Home from './Home';
import About from './About';
import TheMovieDb from './TheMovieDb';
import OnlineShop from './OnlineShop';


class Main extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <main>
                <BrowserRouter>  
                <Switch>
                    <Route component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/theMovieDb' component={TheMovieDb}/>
                    <Route path='/onlineShop' component={OnlineShop}/>
                </Switch>
                </BrowserRouter>
          </main>
        );
    }
}
export default Main;