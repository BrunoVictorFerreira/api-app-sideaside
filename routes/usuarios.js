const express = require('express');
const { route } = require('../app');
const router = express.Router()

// Retorna todos os usuarios
router.get("/", (req, res, next) => {
    res.status(200).send({
        mensagem: "Usando o get dentro da rota de usuarios"
    })
});

// insere um usuario
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: "Usando o post dentro da rota de usuarios"
    })
})

// Retorna os dados de um usuario
router.get('/:id_usuario', (req, res, next) => {
    const id = req.params.id_usuario
        
    res.status(200).send({
        mensagem: "Usando um parametro no verbo",
        id: id
    })
})

// Atualiza um usuario
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: "Usando o patch dentro da rota de usuarios"
    })
})

// Deleta um usuario
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: "Usando o delete dentro da rota de usuarios"
    })
})

//delete um usuario
module.exports = router