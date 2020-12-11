const express = require('express');
const { route } = require('../app');
const router = express.Router()

// Retorna todos os pedidos
router.get("/", (req, res, next) => {
    res.status(200).send({
        mensagem: "Usando o get dentro da rota de pedidos"
    })
});

// insere um pedido
router.post('/', (req, res, next) => {
    const pedido ={
        id_produto : req.body.id_produto,
        quantidade: req.body.quantidade
    }
    res.status(201).send({
        mensagem: "Usando o post dentro da rota de pedidos",
        pedidoCriado: pedido
    })
})

// Retorna os dados de um pedido
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido
        
    res.status(200).send({
        mensagem: "Usando um parametro no verbo",
        id: id
    })
})

// Atualiza um pedido
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: "Usando o patch dentro da rota de pedidos"
    })
})

// Deleta um pedido
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: "Usando o delete dentro da rota de pedidos"
    })
})

//delete um pedido
module.exports = router