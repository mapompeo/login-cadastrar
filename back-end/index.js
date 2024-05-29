const express = require('express')
const app = express()
const cors = require('cors')
const conn = require('./database/conn.js')
const User = require('./model/user.js')
const bcrypt = require('bcrypt')

const port = 3000
const hostname = 'localhost'

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// -----------------------------------------

// ROTA PARA CADASTRAR
app.post('/cadastrar', (req, res) => {
    const dados = req.body
    console.log(dados)
    bcrypt.hash(dados.senha, 10,  async (err, hash) => {
        if (err) {
            console.log(`Erro ao gerar o hash`)
            res.status(500).json({ message: `Erro ao criptografar os dados!` })
        }
        try {
            const gravar = await User.create({nome: dados.nome, email: dados.email, senha: hash})
            res.status(200).json(dados)
        }
        catch (err) {
            console.error(`Erro ao gravar os dados. ${err}`)
            res.status(500).json({ message: `Erro ao gravar os dados!` })
        }
    })
})

// ROTA LOGIN COM BCRYPT
app.post('/login', (req, res) => {
    const login = req.body
    console.log(login)
    bcrypt.compare(login.senha, 10, async (err, result) => {
        if (err) {
            res.status(200).json(`Erro ao verificar a criptografia. ${err}`)
        }
        try {
            const pesq = await User.findOne({where: {email: login.email,}, raw: true})
            res.status(200).json(pesq)
        }
        catch(err) {
            res.status(500).json({message: `Erro no servidor. ${err}`})
        }
    })
})

// -----------------------------------------

app.get('/', (req, res) => {
    res.status(200).json({ message: `Servidor rodando corretamente!` })
})

conn.sync().then(() => {
    app.listen(port, hostname, () => {
        console.log(`Conexão realizada com sucesso! Servidor rodando em ${hostname}:${port}`)
    })
}).catch((err) => {
    console.error(`Erro ao sincronizar o servidor com o banco de dados! ${err}`)
})