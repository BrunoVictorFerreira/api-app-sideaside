const express = require('express');
const { route } = require('../app');
const router = express.Router()

// Retorna todos os produtos
router.get("/", (req, res, next) => {
    res.status(200).send({
        mensagem: "Usando o get dentro da rota de produtos"
    })
});

// insere um produto
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: "Usando o post dentro da rota de produtos"
    })
})

// Retorna os dados de um produto
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto
        
    res.status(200).send({
        mensagem: "Usando um parametro no verbo",
        id: id
    })
})

// Atualiza um produto
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: "Usando o patch dentro da rota de produtos"
    })
})

// Deleta um produto
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: "Usando o delete dentro da rota de produtos"
    })
})

//delete um produto
module.exports = router