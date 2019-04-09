import React from 'react'
import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Toolbar, Typography } from '@material-ui/core'

export default props =>
<AppBar position="static">
  <Toolbar>
    <Typography variant='headline' color='inherit'>
      Exercise DataBase
    </Typography>  
  </Toolbar>
</AppBar>