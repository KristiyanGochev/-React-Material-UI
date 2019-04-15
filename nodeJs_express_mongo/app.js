const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res)=> {
    res.send('Hello World!');

});
app.get('/test', (req, res)=> {
    res.send('TestPage');

});
app.listen(port, () => {
    console.log(`Server is up and running on port numner ${port}`);
}); 