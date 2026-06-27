const express = require('express');
const Comments = require('../models/comments');
const router = express.Router();

router.get('/comments', async (req, res) => {
    const comments = await Comments.find();
    res.json(comments);
});

router.post('/comments/add', async (req, res) => {
    const comment = await Comments.create(req.body);
    res.json(comment);
})

module.exports = router;