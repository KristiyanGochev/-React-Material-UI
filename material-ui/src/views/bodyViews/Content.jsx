import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import { BrowserRouter } from 'react-router-dom';
import {Switch, Route, Redirect } from 'react-router-dom'
import Home from '../maniViews/Home';
import About from '../maniViews/About';
import TheMovieDb from '../maniViews/TheMovieDb';
import OnlineShop from '../maniViews/OnlineShop';

const styles = theme => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing.unit,
  },
  contentWrapper: {
    margin: '40px 16px',
  },
});

function Content(props) {
    debugger;
  const { classes } = props;

  return (
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

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);