const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('senha-encriptada', 'root', 'senai', {
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log(`Conexão realizada com sucesso!`)
}).catch((err) => {
    console.error(`Erro na conexão com o banco de dados! ${err}`)
})

module.exports = sequelize