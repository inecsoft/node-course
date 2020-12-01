const express = require('express')
const path    = require('path')

const port  = 3000

app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(paht.resolve(__dirname,'pages/index.html'))
})

app.listen(port, () => {
    console.log('App listening on port 3000')
})