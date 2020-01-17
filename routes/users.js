const express = require('express');
const router = express.Router();
const User = require('../models/User');

//@route   POST api/users
//@desc    Register a user
//@access  Public
router.post('/', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ 'email': email });

            // check if email already exists in DB
        if(user) res.status(400).json({ msg: 'user already exists!' })
        
            // else create a Model & save
            user = new User(req.body);
            await user.save()
            res.json({ msg: 'succesfully saved' })
            
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }

    // res.json({ msg: 'sent' })
})



module.exports = router;