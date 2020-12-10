const express = require('express')
const app = express()
const rotaUsuarios = require('./routes/usuarios')
const rotaProdutos = require('./routes/produtos')
const rotaPedidos = require('./routes/pedidos')
const morgan = require('morgan')

app.use(morgan('dev'))

app.use('/usuarios', rotaUsuarios)

app.use('/produtos', rotaProdutos)

app.use('/pedidos', rotaPedidos)

app.use((req, res, next) => {
    const erro = new Error('Não encontrado')
    res.status(404)
    next(erro)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
})

module.exports = app