let http=require('http');
let path=require('path');
let fs=require('fs');
let rootPath=path.join(__dirname,'www');
console.log(rootPath);  //c:\Users\Administrator\Desktop\node1\myapache\www
http.createServer((request,response)=>{
    let filepath=path.join(rootPath,request.url);
    var isexist=fs.existsSync(filepath);
    console.log(isexist)
        if (isexist) {
            fs.readdir(filepath, (err, files) => {
                if (err) {
                    console.log(err);
                    fs.readFile(filepath,(err,data)=>{
                        response.end(data);
                    })
                }
                else {
                    if(files.indexOf('index.html')!=-1){
                        console.log(files);
                        fs.readFile(path.join(filepath,'index.html'),(err,data)=>{
                            if(err){
                                console.log(err)
                            }else{
                                response.end(data);
                            }
                        })
                    }else{
                        let backdata = '';
                        for (let i = 0; i < files.length; i++) {
                            backdata += `<h2><a href='${request.url=='/'?'':request.url}/${files[i]}'>${files[i]}</a></h2>`
                        }
                        response.writeHead(200, { "content-type": "text/html;charset=utf-8" });
                        response.end(backdata);
                    }
                }
            })
        } else {
            response.writeHead(404, { "content-type": "text/html;charset=utf-8" })
            response.end(`<h2>40404040404040404</h2>`)
        }
    
 }).listen(80,'node-apache.github.io',()=>{
    console.log('success');
})