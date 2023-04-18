require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine)

app.use('/places', require('./Rest-Rant/controllers/places'))

app.get('/', (req, res) => 
{
    res.render('Hello world!')
})

app.get('*', (req, res) =>
{
    res.status(404).send('<h1>404, page not found</h1>')
})

app.listen(process.env.PORT)
