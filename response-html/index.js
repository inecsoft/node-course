const http = require('http')

const fs = require('fs')

const  aboutPage = fs.readFileSync('about.html')
const  contactPage = fs.readFileSync('contact.html')
const  homePage = fs.readFileSync('index.html')


const server = http.createServer((resquest, response) => {

    console.log(resquest.url)
    // Here Comparision between two values using ===. It will compare strict check means it will check datatype as well.
    if (resquest.url === '/about') {

        return response.end(aboutPage)
      // Here Comparision between two values using ==. It will compare irrespective of datatype of variable
    } else if (resquest.url === '/contact') {

        return response.end(contactPage)

    } else if (resquest.url === '/') {

        return response.end(homePage)
    
    } else {

        response.writeHead(404)

        response.end("Your page was not found")
    }


})

server.listen(3000)