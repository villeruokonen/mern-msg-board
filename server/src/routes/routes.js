const express = require('express');
const router = express.Router();
const auth = require('../api/auth');
const post = require('../api/post');

router.use(express.json());
router.use('/auth', auth);
router.use('/posts', post);

router.get('/', (req, res) => {
    res.send('API hello');
});

module.exports = router;