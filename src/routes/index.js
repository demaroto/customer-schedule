const fs = require("fs");


exports.handleRoutes = url => {

    switch(url){
        case '/':
           return fs.readFileSync(process.cwd() + '/src/views/index.html', 'utf8', (err, html)=>{
                if(err)
                    console.log(err)        
            })
        break
    }
};

