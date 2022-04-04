const express = require('express')
const path    = require('path')
const { config, engine } = require('express-edge');
const bodyParser = require("body-parser");

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
    console.log(req)
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

// app.get('/json', (req, res) => {
//     if (process.env.MESSAGE_STYLE === 'uppercase') {
//         res.json({ message: "Hello json"});
//     } 
//     else {
//         res.json({ message: "Hello json".toUpperCase()});
//     }
// })

// app.get('/json', (req, res, next) => {
//     var string = req.method + " " + req.path + " - " + req.ip;
//     console.log(string);
//     next();
// })

// app.get('/now', (req, res, next) => {
    
//     req.string = new Date().toString();
//     next();
//     // console.log(res.json({time: req.string}));
//     (req, res) => {
//         // accessing the newly added property
//         // in the main function
//         res.send(json({time: req.string}));
//         console.log(res.json({time: req.string}));
//     }
// })

app.get('/:word/echo', (req, res, next) => {
    console.log(req.path);
    // res.json(req.params.word);
    // console.log(res.json(req.params.word));
    const { word } = req.params;
    res.json({
        echo: word
    });
    
    console.log(req.params)
})

// test /name?first=firstname&last=lastname
app.get('/name', (req, res, next) => {
    // var firstName = req.query.first;
    // var lastName = req.query.last;
    
    var { first: firstName, last: lastName } = req.query;
    res.json( { name: `${firstName}  ${lastName}` } );
    console.log( { name: `${firstName}  ${lastName}` } );
})

// Use body-parser to Parse POST Requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/body', (req, res, next) => {
    res.body;
    console.log(req.body)
})

app.listen(port, address,  () => {
    console.log('App listening on ' + address + ':' + port);

})
