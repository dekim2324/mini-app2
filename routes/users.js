const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');

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

            // save user registration to the database
            await user.save()

            //JSON WEB TOKEN

            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(payload, config.get('secretKey'), { expiresIn: 360000 }, (err, token) => {
                if(err) throw err;
                res.json({ token })
            });
            
    } catch (err) {
        console.error('error with authentication', err.message);
        res.status(500).send('Server Error')
    }

})



module.exports = router;