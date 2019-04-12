import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import {
    TextField,
    Button,
    InputLabel,
    MenuItem,
    FormControl,
    Select } from '@material-ui/core'

const styles = them =>({
    FormControl:{
        width: 300
    }
})
export default withStyles(styles)( class extends Component{
    state = this.getInitState()

    getInitState(){
        debugger;
        const {exercise} = this.props
        return exercise 
        ? exercise 
        : {
            title:'',
            description:'',
            muslces:''
        }
    }
    componentWillReceiveProps({exercise}){
        this.setState({
            ...exercise
        })
    }
    handleChange = name => ({target:{value}})=>{
        debugger;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = () =>{
        debugger;
        //TODO validate
        this.props.onSubmit({
            id: this.state.title.toLocaleLowerCase(),
            ...this.state,
           
        })
        this.setState(this.getInitState())
    }
    render(){
        const {classes, exercise, muscles: categories} = this.props
        const {title, muscles, description} = this.state

        return  <form>
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
                        value={muscles}
                        onChange={this.handleChange('muscles')}
                    >
                    {categories.map(category =>
                    <MenuItem value={category} key={category}>{category}</MenuItem>
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
            <br/>                  
            <Button onClick={this.handleSubmit} variant="raised" color="primary">
            {exercise ? 'Edit': 'Create'}
            </Button>
        </form>
    }
})