import React, {Fragment} from 'react'
import {
    Grid,
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText} from '@material-ui/core'

const style = {
    PaperLeft:{
        padding: 20,
        marginTop:10,
        marginBottom:10,
        marginRight:10
    },
    PaperRight:{
        padding: 20,
        marginTop:10,
        marginBottom:10,
    }
}

export default ({exercises}) =>
<Grid container>
    <Grid item sm>
        <Paper style={style.PaperLeft} >
          {exercises.map(([ group ,exercises])=>
            <Fragment>
                <Typography 
                    key={group + 1} 
                    variant="headline"
                    style={{textTransform:'capitalize'}}>
                    {group}
                </Typography>
                <List component="ul">
                {exercises.map(({title}) =>
                <ListItem button>
                    <ListItemText primary={title}/>
                </ListItem>
                )}
                </List>
            </Fragment>
          )}
        </Paper>
    </Grid>
    
    <Grid item sm>
        <Paper style={style.PaperRight}>
        Rigth panel
        </Paper>
    </Grid>

</Grid>