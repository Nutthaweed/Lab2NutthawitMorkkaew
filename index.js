const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine' , 'ejs')

let todos = [];

app.post('/add', (req, res) => {
    const 
})

app.get('/', (req,res) => {
    res.render('index', {todos})    
})

app.listen(PORT , () => {
    console.log(`listening on http://localhost:${PORT}`)
})