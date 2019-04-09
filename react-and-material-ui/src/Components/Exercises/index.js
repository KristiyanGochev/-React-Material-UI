import React from 'react'
import {Grid, Paper} from '@material-ui/core'

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

export default props =>
<Grid container>
    <Grid item sm>
        <Paper style={style.PaperLeft} >
            Left Panel
        </Paper>
    </Grid>
    
    <Grid item sm>
        <Paper style={style.PaperRight}>
        Rigth panel
        </Paper>
    </Grid>

</Grid>