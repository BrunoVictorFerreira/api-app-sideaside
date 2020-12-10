const express = require('express')
const app = express()
const rotaUsuarios = require('./routes/usuarios')
const rotaProdutos = require('./routes/produtos')
const rotaPedidos = require('./routes/pedidos')

app.use('/usuarios', rotaUsuarios)

app.use('/produtos', rotaProdutos)

app.use('/pedidos', rotaPedidos)

app.use('/teste', (req, res, next) => {
    res.status(200).send({
        mesangem: "Ok, deu Certo"
    })
})

module.exports = app