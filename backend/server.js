const express = require('express');
const app = express();
const port = 3000;

const userRoutes = require('./routes/users.routes');


app.use(express.json());
app.use('/usuarios', userRoutes);

app.listen(port, () => {
    console.log(`Server rodando em http://localhost:${port}`)
});


app.get('/', (req, res) => {
    console.log(`vc acessou a rota /`);
    res.json("Bem vindo a API de usuários");

})
