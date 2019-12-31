const fs = require("fs");


exports.handleRoutes = url => {

    switch(url){
        case '/':
           return fs.readFileSync(process.cwd() + '/src/views/index.html', 'utf8', (err, html)=>{
                if(err)
                    console.log(err)        
            })
        break

        case '/resources/css/main.css':
            
                 return fs.readFileSync(process.cwd() + '/src/resources/css/main.css', 'utf8', (err, html)=>{
                    if(err)
                        console.log(err)        
                 })
        break

        case '/resources/js/main.js':
            
                 return fs.readFileSync(process.cwd() + '/src/resources/js/main.js', 'utf8', (err, html)=>{
                    if(err)
                        console.log(err)        
                 })
        break
    }
};

