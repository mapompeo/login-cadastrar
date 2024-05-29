const { DataTypes } = require('sequelize')
const db = require('../db/conn.js')

const user = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(35)
    },
    email: {
        type: DataTypes.STRING(50)
    },
    senha: {
        type: DataTypes.STRING(100)
    }
}, {
    createdAt: false,
    updatedAt: false
})

// user.sync({force: true})

module.exports = user