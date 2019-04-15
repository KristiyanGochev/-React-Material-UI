import React, {Fragment} from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Form from './Form'
import {
    Grid,
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton} from '@material-ui/core'


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
    muscles,
    exercise,
    category,
    onSelect,
    onDelete,
    onSelectEdit,
    onEdit,
    editMode,
    exercise:{
        id,
        title = 'Welcome',
        description = 'Please select an exercises from the list on the left!',
        }
    }) =>
<Grid container>
    <Grid item sm>
        <Paper style={style.PaperLeft} >
          {exercises.map(([ group ,exercise])=>
            !category || category === group 
                ?<Fragment key = {group}>
                    <Typography 
                        key={group + 1} 
                        variant="headline"
                        style={{textTransform:'capitalize'}}>
                        {group}
                    </Typography>
                    <List component="ul">
                    {exercise.map(({id,title}) =>
                        <ListItem
                        button
                        key ={id}
                        onClick={()=>onSelect(id)}>
                            <ListItemText primary={title}/>
                            <ListItemSecondaryAction>
                            <   IconButton onClick={() => onSelectEdit(id)}>
                                    <EditIcon/>
                                </IconButton>
                                <IconButton onClick={() => onDelete(id)}>
                                    <DeleteIcon/>
                                </IconButton>
                            </ListItemSecondaryAction>
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
        {editMode
        ?<Form 
        exercise = {exercise}
        muscles= {muscles}
        onSubmit={onEdit}/>
        :<Fragment>
            <Typography variant="display1">
             {title}
            </Typography>
            <Typography variant="subheading"
            style={{marginTop:20}}>
               {description}
            </Typography>
        </Fragment>
        }

        </Paper>
    </Grid>

</Grid>