const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const userJwt = require('../utils/userJwt');
const User = require('../models/User');

dotenv.config();

router.use(express.json());

router.get('/', (req, res) => {
    res.send('AUTH hello');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if(!username || !password) {
        return res.status(400).json({ message: 'Please enter all fields' });
    }

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = userJwt.signUser(user);

        res.json({ token });
    }
    catch (err) {
        res.status(500).json({ message: 'Server error' });
        console.log(err);
    }
});

router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        const existingUser = await User.findOne({ username: username });

        if (existingUser) {
            console.log('User already exists: ', existingUser.username);
            return res.status(400).json({ message: 'User already exists' });
        }

        const pHash = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            password: pHash
        });

        await newUser.save();

        const token = userJwt.signUser(newUser);

        res.status(201).json({ token: token });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;