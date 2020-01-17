const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

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

            // Salt & Hash password
            const salt = await bcrypt.genSalt(7);
            user.password = await bcrypt.hash(password, salt);

            await user.save()
            res.json({ msg: `new password: ${user.password}` });
            
    } catch (err) {
        console.error('error with authentication', err.message);
        res.status(500).send('Server Error')
    }

})



module.exports = router;