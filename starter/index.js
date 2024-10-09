//SERVER
const fs=require('fs');
const http = require('http');
const url = require('url');

const data=fs.readFilesync(`${__dirname}/dev-data/data.json`,'utf-8');
const dataObj=JSON.parse(data);

const server=http.createServer((req,res)=>{
    const pathName=req.url;
    if(pathName==='/' || pathName==='/overview'){
        res.end("hello from server this is an overview page");
    }
    else if(pathName==='/product'){
        res.end("hello from server this is a product page");

    }
    else if(pathName==='/api'){
        
       res.end(data);
        
       
    }
    else{
        res.writeHead(404)
        res.end("page not found");
    }
    
});

server.listen(8000,'127.0.0.1',()=>{
    console.log("listening to req");
})
