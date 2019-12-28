const http = require("http")
const url = require('url')
const fs = require("fs");
const routes = require("./src/routes/index")

const PORT = 8000

http.createServer((req, res)=>{
    
    res.writeHead(200, {'Content-Type': 'text/html'})

    var urlName = url.parse(req.url, true).pathname

    if(urlName == '/resources/css/main.css')
        res.writeHead(200, {'Content-Type': 'text/css'})

    res.write('' + routes.handleRoutes(urlName))

    res.end()

}).listen(PORT)

console.log('Server running at http://127.0.0.1:8000/')