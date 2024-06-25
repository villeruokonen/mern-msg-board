const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.use(express.json());

router.get('/', (req, res) => {
    res.send('POSTS hello');
});

router.get('/all', async (req, res) => {
    const posts = await Post.find({});

    res.json(posts);
});

router.get('/:id', async (req, res) => {
    const post = await Post.findOne({id: req.params.id});

    if(!post) {
        return res.status(404).json({ message: 'No such post' });
    }

    res.json(post);
});

router.put('/:id', async (req, res) => {
    const { content } = req.body;
    const post = await Post.findOne({id: req.params.id});

    if(!post) {
        return res.status(404).json({ message: 'No such post' });
    }

    post.content = content;
    await post.save();
});

router.delete('/:id', async (req, res) => {
    const post = await Post.findOne({id: req.params.id});

    if(!post) {
        return res.status(404).json({ message: 'No such post' });
    }

    await Post.deleteOne(post);
});

router.post('/new', async (req, res) => {
    const { title, content} = req.body;

    if(!title || !content) {
        return res.status(400).json({ message: 'Please enter all fields' });
    }
    
    const author = 'Anonymous';

    try {
        const newPost = new Post({
            title,
            content,
            author
        });

        await newPost.save();

        res.status(201);
    }
    catch (err) {
        res.status(500).json({ message: 'Server error' });
        console.log(err);
    }
});

module.exports = router;