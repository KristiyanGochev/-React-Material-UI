import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import CreateDialog from '../Exercises/Dialog'

export default ({muscles, onExerciseCreate}) =>
<AppBar position="static">
  <Toolbar>
    <Typography variant='headline' color='inherit' style={{flex:1}}>
      Exercise DataBase
    </Typography>  
    <CreateDialog onCreate={onExerciseCreate} muscles= { muscles }/>
  </Toolbar>
</AppBar>