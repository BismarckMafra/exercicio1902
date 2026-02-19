const express = require('express');
const app = express();
const port = 3000;
const {saveUser, readUsers} = require('./utils/fileHandler');

app.use(express.json());

app.listen(port, () => {
  console.log(`Server rodando em http://localhost:${port}`)
});

app.get('/',(req,res) => {
    console.log(`vc acessou a rota /`);
    res.json({message: "Bem vindo a API de usuários"});
    
})

app.get('/users',(req,res) => {
    const usuarios = readUsers();
    res.json(usuarios);
})


