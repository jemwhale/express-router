const express = require('express')
const routerUser = express.router()

// List of Users
let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]

routerUser.get('/', (req, res) => {
    res.send(users)
});

routerUser.get('/:id', (req, res) => {
    res.send(users[req.params.id])
});

routerUser.post('/', (req, res) => {
    users.push(req.body)
    console.log(users)
    res.sendStatus(200)
});

routerUser.put('/:id', (req, res) => {
    users[req.params.id] = req.body
    res.sendStatus(200)
});

routerUser.delete('/:id', (req, res) => {
    users.splice([req.params.id], 1)
    res.sendStatus(200)
});


module.exports = routerUser