const express = require('express')
const path    = require('path')
const { config, engine } = require('express-edge');

require('dotenv').config()

const port  = 3000
const address = process.env.HOST || 'localhost';

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

// app.get('/json', (req, res) => {
//     res.json(JSON.stringify({ message: "Hello json"} ));
//     // res.json({
//     //     message: "Hello json"
//     // });
// })

app.get('/json', (req, res) => {
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        res.json({ message: "Hello json"});
    } 
    else {
        res.json({ message: "Hello json".toUpperCase()});
    }
})

app.listen(port, address,  () => {
    console.log('App listening on ' + address + ':' + port);

})
