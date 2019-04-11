import React, { Fragment,Component } from 'react'
import AddIcon from '@material-ui/icons/Add';
import {
    Button,
    TextField,
    DialogTitle,
    DialogContentText,
    DialogContent,
    DialogActions,
    Dialog,
    InputLabel,
    MenuItem,
    FormControl,
    Select
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = them =>({
    FormControl:{
        width: 500
    }
})

export default withStyles(styles) (class extends Component {
    state = {
        open:false,
        exercise:{
            title:'',
            description:'',
            muslces:''
        }
    }
    handleTogggle = () =>{
        this.setState({
            open:!this.state.open
        }) 
    }
    handleChange = name => ({target:{value}})=>{
        debugger;
        this.setState({
            exercise:{
                ...this.state.exercise,
                [name]: value
            }
        })
    }
    render(){
        const {open, exercise:{ title, description}} = this.state
        const {classes, muscles: categories } = this.props;
        return <Fragment>
            <Button variant="fab" mini onClick={this.handleTogggle}>
                <AddIcon />
            </Button>
            <Dialog
                open={open}
                onClose={this.handleTogggle}
            >
                <DialogTitle id="form-dialog-title">
                    Create New Exercise
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill the form below.
                    </DialogContentText>
                    <form>
                        <TextField
                            label="Title"       
                            value={title}
                            onChange={this.handleChange('title')}
                            margin="normal"
                            className={classes.FormControl}
                        />
                        <br/>
                        <FormControl  className={classes.FormControl}>
                            <InputLabel htmlFor="muscles">
                            Muscles
                            </InputLabel>
                                <Select
                                    value={categories}
                                    onChange={this.handleChange(categories)}
                                >
                                {categories.map(category =>
                                <MenuItem value={category}>{category}</MenuItem>
                                    )}
                            </Select>
                        </FormControl>
                        <br/>
                        <TextField
                            label="Description"    
                            multiline
                            rowsMax="4"
                            value={description}
                            onChange={this.handleChange('description')}
                            margin="normal"
                            className={classes.FormControl}
                        />
      
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleTogggle} variant="raised" color="primary">
                        Create
                    </Button>
                    <Button onClick={this.handleTogggle} variant="raised" color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    }
})
