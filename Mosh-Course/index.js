const config = require('config');
const Joi = require('joi');
//const morgan = require('morgan');
const express = require('express');
const logger =  require('./logger')
const autentication =  require('./autentication')
const app = express();


// MiddleWare start
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));
//app.use(morgan('tiny'));

app.use(logger);
app.use(autentication);
// MiddleWare end
console.log(`Node Env : ${process.env.NODE_ENV}`)
console.log(`${app.get('env')}`)

console.log("mailPassword"+ config.get("mail.password"))
const courses = [
    {
        id: 1,
        name: 'course 1'
    },{
        id: 2,
        name: 'course 2'
    },{
        id: 3,
        name: 'course 3'
    }
]

app.get('/',(req,res)=>{
    res.send('Hello World!!!');
});

app.get('/api/courses',(req,res)=>{
    res.send(courses);
});

app.post('/api/courses', (req,res) => {

    const {error} = validateCourse(req.body);

    if(error){
        res.status(404).send(error.details[0].message);
        return;
    }
    const course = {
        id: courses.length+ 1,
        name : req.body.name
    };
    courses.push(course);
    res.send(course);
})

app.get('/api/courses/:id',(req,res)=>{
    var id = req.params.id;
    const course = courses.find(c=> c.id === parseInt(id))
    if(!course){
        res.status(404).send(`The course with the given ID : '${id}' was not found`);
        return;
    }
    res.send(course);
});

app.put('/api/courses/:id',(req,res)=>{
    // Look up the course
    // if not exist, return 404
    var id = req.params.id;
    const course = courses.find(c=> c.id === parseInt(id))
    if(!course){
        res.status(404).send(`The course with the given ID : '${id}' was not found`);
        return;
    }

    // Validate
    // If invalid, return 400 - Bad request
    const {error} = validateCourse(req.body);

    if(error){
        res.status(404).send(error.details[0].message);
        return;
    }
    // Update course
    // Return th updated course 
    course.name = req.body.name;
    res.send(course);
});

app.delete('/api/courses/:id',(req,res)=>{
    const course = courses.find(c=> c.id === parseInt(req.params.id))
    if(!course){
        res.status(404).send(`The course with the given ID : '${req.params.id}' was not found`);
        return;
    }
     const index = courses.indexOf(course);
     courses.splice(index,1);

     res.send(course)
})

function validateCourse(course){
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course,schema); 
}

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Listening on port ${port}... `)
});
