const express = require('express')
const router = express.Router();
const userController = require('../controllers/users')
const sampleUser = require('../data/sampleUser')

// Get all users
router.get('/users/', userController.list);

// Get one user
router.get('/users/:id', userController.show)

// Post new user
router.post('/users/', userController.create)

// Update user
router.put('/users/:id', userController.updateUser)

// Delete user
router.delete('/users/:id', userController.deleteUser)

module.exports = router;
