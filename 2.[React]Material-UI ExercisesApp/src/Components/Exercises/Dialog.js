import React, { Fragment,Component } from 'react'
import AddIcon from '@material-ui/icons/Add';
import Form from './Form'
import {
    Button, 
    DialogTitle,
    DialogContentText,
    DialogContent,
    Dialog

} from '@material-ui/core'

export default class extends Component {
    state = {
        open:false
    }
    handleTogggle = () =>{
        this.setState({
            open:!this.state.open
        }) 
    }

    handleFormSubmit = exercise => {
        this.handleTogggle()
        this.props.onCreate(exercise)
    }

    handleCansel =()=>{
        this.setState({
            open:false,
            exercise:{
                title:'',
                description:'',
                muscles:''
            }
        })
    }

    render(){
        const {open } = this.state,
              { muscles } = this.props
             
        return <Fragment>
            <Button variant="fab" mini onClick={this.handleTogggle}>
                <AddIcon />
            </Button>
            <Dialog
                open={open}
                onClose={this.handleTogggle}
            >
                <DialogTitle>
                    Create New Exercise
                </DialogTitle>
                
                <DialogContent>

                    <DialogContentText>
                        Please fill the form below.
                    </DialogContentText>

                    <Form muscles={muscles}
                    onSubmit={this.handleFormSubmit}
                    />

                </DialogContent>
            </Dialog>
        </Fragment>
    }
}
