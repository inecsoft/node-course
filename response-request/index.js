const http = require('http')


const server = http.createServer((resquest, response) => {

    console.log(resquest.url)
    // Here Comparision between two values using ===. It will compare strict check means it will check datatype as well.
    if (resquest.url === '/about') {

        return response.end("The about page")
      // Here Comparision between two values using ==. It will compare irrespective of datatype of variable
    } else if (resquest.url === '/contact') {

        return response.end("The contact page")

    } else if (resquest.url === '/') {

        return response.end("The Home page")
    
    } else {

        response.writeHead(404)

        response.end("Your page was not found")
    }


})

server.listen(3000)