import * as http from "http"
import * as url from "url"
import * as routes from "./src/routes/index.js"
import * as mimeType from "./src/routes/mimeType.js"

const PORT = 8000

http.createServer((req, res)=>{
    
    res.writeHead(200, {'Content-Type': 'text/html'})

    var urlName = url.parse(req.url, true).pathname
    
    res.writeHead(200, {'Content-Type': mimeType.handleMimeType(urlName)})
    
    res.write('' + routes.handleRoutes(urlName))

    res.end()

}).listen(PORT)

console.log('Server running at http://127.0.0.1:8000/')