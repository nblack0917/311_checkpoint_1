const express = require('express')
const router = express.Router();
const users = require('../data/index')
const sampleUser = require('../data/sampleUser')

// Get all users
router.get('/users/', (req, res) => res.json(users));

// Get one user
router.get('/users/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));
    if(found) {
        res.json(users.filter(user => user.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({ msg: 'User not found'})
    }
})

// Post new user
router.post('/users/', (req, res) => {
    const newUser = sampleUser
    newUser.id = users.length + 1
    users.push(newUser)
    res.json(users)
})

// Update user
router.put('/users/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));
    if(found) {
        let userToUpdate = users.filter(user => user.id === parseInt(req.params.id));
        userToUpdate = sampleUser
        const userIdNumber = parseInt(req.params.id)
        userToUpdate.id = userIdNumber
        users.splice(userIdNumber-1, 1, userToUpdate)
        res.json(users)
    } else {
        res.status(400).json({ msg: 'User not found'})
    }
})

// Delete user
router.delete('/users/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));
    if(found) {
        const userIdNumber = parseInt(req.params.id)
        users.splice(userIdNumber-1, 1)
        res.json(users)
    } else {
        res.status(400).json({ msg: 'User not found'})
    }
})

module.exports = router;
