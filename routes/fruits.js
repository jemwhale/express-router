const express = require('express')
const routerFruits = express.Router()
const {check, validationResult} = require('express-validator')

// List of Fruits
let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]


routerFruits.get('/', (req, res) => {
    res.send(fruits)
})

routerFruits.get('/:id', (req, res) => {
    res.send(fruits[req.params.id])
});

routerFruits.post('/', [check('color').not().trim().isEmpty()],(req,res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(400).send({error: errors.array()}) 
    }
    fruits.push(req.body)
    res.sendStatus(200)
});

routerFruits.put('/:id', (req, res) => {
    fruits[req.params.id] = req.body
    res.sendStatus(200)
});

routerFruits.delete('/:id', (req, res) => {
    fruits.splice([req.params.id], 1)
    res.sendStatus(200)
});

module.exports = routerFruits