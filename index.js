const express = require("express");
const app = express();

app.get('/', function(req,res){
res.sendFile(__dirname + "/html/app.html")

} );

app.get("/sobre", function(req,res){
    res.sendFile(__dirname + "/html/sobre.html")
    
    } );

    app.get("/blog", function(req,res){
        res.send("Bem-vindo ao meu Blog")
        
        } );

        app.get("/ola/:cargo/:nome", function(req,res){
            res.send("Ola" + req.params.nome);
                
            } );   
    
app.listen(8081, function() {
console.log("O servidor está rodando em http://localhost:8081")

});