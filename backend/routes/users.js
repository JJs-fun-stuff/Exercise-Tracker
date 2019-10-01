const router = require('express').Router();
let User = require('../models/user.model');


// a first route handling incoming HTTP get request 
// for url localhost:8080/routes/users/ ต้องมี slash ตอนจบด้วย
// find() method (in mongoose) return in a promise JSON format
router.route('/').get((req, res) => {
    User.find()
        // res.json is return the users in json format
        .then(users => res.json(users))
        .catch(err => err.status(400).json('Error:' + err));
})

// second endpoint handle the incoming get request
router.route('/add').post((req, res) => {

    const username = req.body.username;

    const newUser = new User({
        username
    });


    newUser.save()
        .then(() => res.json('User added'))
        .catch(err => res.status(400).json('Error:' + err))
});

module.exports = router;