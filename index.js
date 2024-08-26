
const http=require('http');
const port=3001;
const hostname='127.0.0.1';
//accssing fs for readfile
const fs=require('fs');

const handfile=(filename,statusCode,req,res)=>{
    fs.readFile(filename,'utf-8',(err,data)=>{
        if(err){
            console.log(er);
        }else{
            res.writeHead(statusCode,{"Content-Type":"text/html"});
            res.write(data);
            res.end();
        }
    })

}

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        handfile("index.html",200,req,res);
    }else if(req.url==='/about'){
        handfile("about.html",200,req,res);
    }else if(req.url==='/contact'){
        handfile("contact.html",200,req,res);
    }else{
        handfile("err.html",200,req,res);
    }
})


server.listen(port,hostname,()=>{
    console.log(`Server is running successfull y at http://${hostname}:${port}`);
})