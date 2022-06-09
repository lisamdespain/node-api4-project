const express= require('express');
const server = express();
server.use(express.json());

const Users = require('./users/users-model');

server.get('/', (req, res) =>{
    res.send(`<h1>Lisa's Cool User Website</h1>`);
})

server.get('/api/users', (req, res) =>{
    Users.find()
    .then(result =>{
        res.status(200).json(result)
    }).catch(err =>{
        res.status(500).json({message: 'server error'})
    })
})

server.post('/api/users', (req, res) =>{
    Users.insert(req.body)
    .then(newUser =>{
        res.status(201).json(newUser)
    }).catch(err =>{
        res.status(500).json({message: 'server error'});
    })
})

server.get('/api/users', (req, res) =>{
    Users.login(req.body)
    .then(user =>{
        res.status(200).json({message: `Welcome, ${user}!`})
    })
})
module.exports = server;
