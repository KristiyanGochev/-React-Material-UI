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
handleCategorySelected = category =>{
this.setState({
    category : category
})

}
handleExerciseSelected = id =>{
    this.setState((exercise)=>({
        exercise: exercises.find(ex =>ex.id === id)
    }))
}

    render(){
       const exercises = this.getExercisesByMusles(),
       { category, exercise} = this.state
        return <Fragment>
            <Header muscles= {muscles} />
            <Exercises
            exercise = {exercise}
            category={category}
            onSelect={this.handleExerciseSelected}
            exercises={exercises}/>
            <Footer
            category = {category}
            muscles = {muscles}
            onSelect ={this.handleCategorySelected}/>
        </Fragment>
    }
}