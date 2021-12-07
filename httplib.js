const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    if(req.url==='/home' || req.url === '/'){
        let data = fs.readFileSync('Static/home.html');
        
        res.write(data.toString())
    }
    else if(req.url==='/about'){
        let data = fs.readFileSync('Static/about.html');
        
        
        res.write(data.toString())
    }
    else if(req.url==='/blog'){
        let data = fs.readFileSync('Static/blog.html');
     
        
        res.write(data.toString())
    }
    else if(req.url==='/contact'){
        let data = fs.readFileSync('Static/contact.html');
        res.write(data.toString())
    }
    
    else{
        let data = fs.readFileSync('Static/home.html');
        res.write(data.toString());
    }
    res.end();
}).listen(8080, ()=>{console.log("server is  running on port 8080")});