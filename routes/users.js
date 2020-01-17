const express = require('express');
const router = express.Router();
const User = require('../models/User');

//@route   POST api/users
//@desc    Register a user
//@access  Public
router.post('/', async (req, res) => {
    const { name, email, password } = req.body;

    // var newUser = new User(user);
    // newUser.save((err) => {
    //     if(err) console.error(err);
    // })

    try {
        let user = await User.findOne({ 'email': email });

        if(user) res.status(400).json({ msg: 'user already exists!' })
        
            // create a Model
            user = new User(req.body);
            await user.save(err => {
                if(err) console.error(err)
            })
            res.json({ msg: 'succesfully saved' })
            
        

    } catch (err) {
        if(err) console.error(err.message)
    }

    // res.json({ msg: 'sent' })
})



module.exports = router;