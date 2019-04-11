import React, { Component, Fragment } from 'react'
import {Header, Footer} from './Layouts'
import Exercises from './Exercises'
import {muscles, exercises} from '../store'

export default class extends Component {
    state={
        exercises,
        exercise:{}
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
    this.setState((exercise)=>({
        exercise: exercises.find(ex =>ex.id === id)
    }))
}
handleExerciseCreate = exercises =>{
    this.setState(({exercise}) =>({
        exercises:[
            ...exercises, exercise
            ]
    })
    )}

    render(){
       const exercises = this.getExercisesByMusles(),
       { category, exercise} = this.state
        return <Fragment>
            <Header muscles= {muscles} onExerciseCreate = {this.handleExerciseCreate} />
            <Exercises
            exercise = {exercise}
            category={category}
            onSelect={this.handleExerciseSelect}
            exercises={exercises}/>
            <Footer
            category = {category}
            muscles = {muscles}
            onSelect ={this.handleCategorySelect}/>
        </Fragment>
    }
}