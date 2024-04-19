const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

var aluno = {
    nome: "Fulano",
    nota: 6.5,
    curso: 'ADS'
}

app.get("/", (req, res)=>{
    res.send(aluno);
});

app.listen(8000, ()=>{
    console.log("Servidor rodadndo na porta 8000");
});

app.post("/", (req, res)=>{
    console.log(req.body);
    res.send("ok");
});