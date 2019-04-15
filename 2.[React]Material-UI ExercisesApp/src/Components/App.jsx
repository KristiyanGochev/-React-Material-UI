import React, { Component, Fragment } from 'react'
import {Header, Footer} from './Layouts'
import Exercises from './Exercises'
import {muscles, exercises} from '../store'

export default class extends Component {
    state={
        exercises,
        exercise: { },
        editMode:false
    }
getExercisesByMusles(){
    return Object.entries(this.state.exercises.reduce((exercises,exercise)=> {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
    },{})
    )
}
handleCategorySelect = category =>{
this.setState({
    category : category
})

}
handleExerciseSelect = id =>{
    this.setState(({exercises})=>({
        exercise: exercises.find(ex =>ex.id === id),
        editMode:false
    }))
}
handleExerciseDelete = id =>{
    this.setState(({ exercises })=>({
        exercises:exercises.filter(ex => ex.id !== id),
        editMode:false,
        exercise:{}
    }))
}
handleExerciseSelectEdit = id =>{
    this.setState(({ exercises }) => ({
        exercise: exercises.find(ex =>ex.id === id),
        editMode:true
    }))
}

handleExerciseEdit = exercise =>{
    this.setState(({ exercises }) => ({
        exercises: [
            ...exercises.filter(ex =>ex.id !== exercise.id),
            exercise],
            exercise

    }))
}

handleExerciseCreate = exercise =>{
    debugger;
    this.setState(({exercises}) =>({
        exercises:[
            ...exercises, exercise
            ]
    })
    )}

    render(){
       const exercises = this.getExercisesByMusles(),
       { category, exercise, editMode} = this.state
        return <Fragment>
            <Header muscles= {muscles} onExerciseCreate = {this.handleExerciseCreate} />
            <Exercises
            exercise = {exercise}
            category={category}
            exercises={exercises}
            editMode={editMode}
            muscles = {muscles}
            onSelect={this.handleExerciseSelect}
            onDelete = {this.handleExerciseDelete}
            onSelectEdit = {this.handleExerciseSelectEdit}
            onEdit={this.handleExerciseEdit}/>
            <Footer
            category = {category}
            muscles = {muscles}
            onSelect ={this.handleCategorySelect}/>
        </Fragment>
    }
}