const express = require('express');
const app = express();

const Joi = require('joi');

app.use(express.json());
const genres = [
    {
        id: 1,
        name:'Horror'
    },{
        id: 2,
        name:'Comeny'
    },{
        id: 3,
        name:'Action'
    }
];

// GET
app.get('/api/genres',(req,res)=>{
    res.send(genres)
})

app.get('/api/genres/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const genre = genres.find(p=>p.id === id)
    if(!genre) return res.status(404).send(`Genre with id ${req.params.id} does not exist!`)
    res.send(genre)
})


// POST
app.post('/api/genres',(req,res)=>{
    const id = genres.length +1 ;
    const newGenre = {
        id:id,
        name: req.body.name
    }
    const {error} = validatePostGenres(newGenre);
    if(error){
        return res.status(400).send(error.details[0].message)
    }
    genres.push(newGenre);
    res.send(newGenre);
})

// PUT
app.put('/api/genres/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    const toUpdateGenre = genres.find(p=>p.id === id);
    if(!toUpdateGenre){
        return res.status(404).send(`Genre with id '${id}' does not exist!`)
    }
    const {error} =  validatePostGenres(req.body);
    if(error){
        return res.status(400).send(error.details[0].message)
    }

    toUpdateGenre.name = req.body.name;
    res.send(toUpdateGenre);
})


// DELETE
app.delete('/api/genres/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const toDeleteGenre = genres.find(p=>p.id === id);
    if(!toDeleteGenre){
        return res.status(404).send(`Genre with id '${id}' does not exist!`)
    }
    const index = genres.indexOf(toDeleteGenre);
    genres.splice(index,1);

    res.send(toDeleteGenre)
})

// Functions 
function validatePostGenres(genre){
    const genrModel= {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(genre,genrModel);

}
// Start a web server!
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`The app is listening on port: ${port}`)
})