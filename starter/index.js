//SERVER
const http = require('http');
const url = require('url');
const server=http.createServer((req,res)=>{
    const pathName=req.url;
    if(pathName==='/' || pathName==='/overview'){
        res.end("hello from server this is an overview page");
    }
    else if(pathName==='/product'){
        res.end("hello from server this is a product page");

    }
    else{
        res.writeHead(404)
        res.end("page not found");
    }
    
});

server.listen(8000,'127.0.0.1',()=>{
    console.log("listening to req");
})
