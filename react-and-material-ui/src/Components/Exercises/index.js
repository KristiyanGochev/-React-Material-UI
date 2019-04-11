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
        marginRight:10,
        height:500,
        overflowY:'auto'
    },
    PaperRight:{
        padding: 20,
        marginTop:10,
        marginBottom:10,
    }
}

export default ({
    exercises,
    category,
    onSelect,
    exercise:{
        id,
        title = 'Welcome',
        description = 'Please select an exercises from the list on the left!',
        }}) =>
<Grid container>
    <Grid item sm>
        <Paper style={style.PaperLeft} >
          {exercises.map(([ group ,exercises])=>
            !category || category === group 
                ?<Fragment key = {group}>
                    <Typography 
                        key={group + 1} 
                        variant="headline"
                        style={{textTransform:'capitalize'}}>
                        {group}
                    </Typography>
                    <List component="ul">
                    {exercises.map(({id,title}) =>
                        <ListItem
                        button
                        key ={id}
                        onClick={()=>onSelect(id)}>
                            <ListItemText primary={title}                            
                            />
                        </ListItem>
                        )}
                    </List>
            </Fragment>
            : null
        )}
        </Paper>
    </Grid>
    
    <Grid item sm>
        <Paper style={style.PaperRight}>
            <Typography variant="display1">
             {title}
            </Typography>
            <Typography variant="subheading"
            style={{marginTop:20}}>
               {description}
            </Typography>
        </Paper>
    </Grid>

</Grid>