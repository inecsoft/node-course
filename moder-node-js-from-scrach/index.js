const express = require('express')
const path =   require('path')

const app = express()

// app.get('/', (request, response) => {

//     response.json({
//         name: 'Ivan Pedro Artega'
//     })
// }) 
app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.js'))
})

app.get('/about', (request, response) => {
        response.send({
            name: 'about Ivan Pedro Artega' 
        })
    }
)

app.listen(3000, () => 
    console.log("server started on port 3000")
)


// const http = require('http')

// const fs = require('fs')

// const  aboutPage = fs.readFile('about.html')
// const  contactPage = fs.readFile('contact.html')
// const  homePage = fs.readFile('index.html')


// const server = http.createServer((resquest, response) => {

//     console.log(resquest.url)
//     // Here Comparision between two values using ===. It will compare strict check means it will check datatype as well.
//     if (resquest.url === '/about') {

//         return response.end(aboutPage)
//       // Here Comparision between two values using ==. It will compare irrespective of datatype of variable
//     } else if (resquest.url === '/contact') {

//         return response.end(contactPage)

//     } else if (resquest.url === '/') {

//         return response.end(homePage)
    
//     } else {

//         response.writeHead(404)

//         response.end("Your page was not found")
//     }


// })

// server.listen(3000)