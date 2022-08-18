const express = requite('express')
const routerFruits = express.router()

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
    res.sendStatus(fruits)
})

routerFruits.get('/:id', (req, res) => {
    res.send(fruits[req.params.id])
});

module.exports = routerFruits