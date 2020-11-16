const express = require('express')

const path   = require('path')
const port  = 3000

const app = express()

app.use(express.static('public'))

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.get('/about', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'about.html'))
})

app.get('/contact', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'contact.html'))
})

app.listen(port, () => {
    console.log('server started at port 3000')
} )