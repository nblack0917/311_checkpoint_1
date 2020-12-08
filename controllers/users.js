const users = require('../data/index')
const sampleUser = require('../data/sampleUser')

//Get all users
const list = (req, res) => res.json(users);

// Get one user
const show = (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));
    if(found) {
        res.json(users.filter(user => user.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({ msg: 'User not found'})
    }
};

// Post new user
const create = (req, res) => {
    let lastUser = users[users.length - 1].id
    let count = lastUser + 1;
    let newUser = {
        ...sampleUser
    };
    newUser.id = count;
    users.push(newUser)
    res.json(users)
    console.log(sampleUser, newUser)
};

// Update user
const updateUser = (req, res) => {
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
};

// Delete user
const deleteUser = (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));
    if(found) {
        const userIdNumber = parseInt(req.params.id)
        users.splice(userIdNumber-1, 1)
        res.json(users)
    } else {
        res.status(400).json({ msg: 'User not found'})
    }
};

module.exports = {
    list,
    show,
    create,
    updateUser,
    deleteUser
}