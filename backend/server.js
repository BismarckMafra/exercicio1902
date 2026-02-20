const express = require('express');
const app = express();
const port = 3000;
const { saveUser, readUsers } = require('./utils/fileHandler');

app.use(express.json());

app.listen(port, () => {
    console.log(`Server rodando em http://localhost:${port}`)
});

app.get('/', (req, res) => {
    console.log(`vc acessou a rota /`);
    res.json("Bem vindo a API de usuários");

})

app.get('/listar_usuario', (req, res) => {
    const usuarios = readUsers();
    res.json(usuarios)
})

app.get('/listar_usuario/:id', (req, res) => {
    const id_usuarios = parseInt(req.params.id);
    const lista_usuarios = readUsers();
    const usuario = lista_usuarios.find(u => u.id === id_usuarios);
    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).json({ message: "Usuário não encontrado" });
    }
})

app.post('/cadastrar_usuarios', (req, res) => {
    const lista_usuarios = readUsers();
    const novo_id = lista_usuarios.length > 0 ? Math.max(...lista_usuarios.map(u => u.id + 1))  : 1
 
    const novo_usuario = {
        id: novo_id,
        nome: req.body.nome,
        sobrenome: req.body.sobrenome
    }

    lista_usuarios.push(novo_usuario);
    saveUser(lista_usuarios);
    res.status(201).json(novo_usuario);
})

app.put('/atualizar_usuarios/:id', (req, res) => {
    const id_usuarios = parseInt(req.params.id);
    const lista_usuarios = readUsers();
    const usuarioIndex = lista_usuarios.findIndex(u => u.id === id_usuarios)

    if (usuarioIndex !== -1) {
        lista_usuarios[usuarioIndex].nome = req.body.nome || lista_usuarios[usuarioIndex].nome;
        lista_usuarios[usuarioIndex].sobrenome = req.body.sobrenome || lista_usuarios[usuarioIndex].sobrenome;
        saveUser(lista_usuarios);
        res.json(lista_usuarios[usuarioIndex]);
    } else {
        res.status(404).json({ message: "Usuário não encontrado" });
    }
})

app.delete('/deletar_usuarios/:id', (req, res) => {
    const id_usuarios = parseInt(req.params.id);
    const lista_usuarios = readUsers();
    const usuarioIndex = lista_usuarios.findIndex(u => u.id === id_usuarios)
    if (usuarioIndex !== -1) {
        lista_usuarios.splice(usuarioIndex, 1);
        saveUser(lista_usuarios);
        res.json({ message: "Usuário deletado com sucesso" });
    } else {
        res.status(404).json({ message: "Usuário não encontrado" });
    }
})

