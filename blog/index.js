const express = require('express')
const path    = require('path')
const { config, engine } = require('express-edge');
 
const port  = 3000
const address = '127.0.0.1'

const app = new express()
app.use(express.static('public'))
// Automatically sets view engine and adds dot notation to app.render
app.use(engine)
app.set('views', `${__dirname}/views`);

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/about.html'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
})

app.get('/post', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/post.html'))
})

app.listen(port, address,  () => {
    console.log('App listening on ' + address + ':' + port);

})
