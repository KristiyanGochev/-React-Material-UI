const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res)=> {
    res.send('Hello World!');

});

app.get('/api/courses', (req, res)=> {
    res.send([1,2,3]);
});

// /api/courses/1
app.get('/api/courses/:id',(req,res)=>{
res.send(req.params.id)
})

// /api/posts/2018/11
app.get('/api/posts/:year/:month',(req,res)=>{
    res.send(req.params)
})
// /api/posts/2018/11?SortBy=Name
app.get('/api/posts/:year/:month/:day',(req,res)=>{
    res.send(req.query)
})

app.listen(port, () => {
    console.log(`Server is up and running on port numner ${port}`);
}); 