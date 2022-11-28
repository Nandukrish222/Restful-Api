const express = require('express');
const router = express.Router();
const Posts = require('../models/Posts');

router.get('/', async (req, res) => {
    try{
        const post = await Posts.find();
        res.json(post);
    }catch(err){
        res.json({message:err});
    }
});


router.post('/', async (req,res) => {
    const post = new Posts({
        title: req.body.title,
        description: req.body.description
    });

    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message:err });
    }
});

router.get('/:postId', async (req,res) => {
    try{
    const post = await Posts.findById(req.params.postId);
    res.json(post);
}catch(err){
        res.json({message: err});
}
});

module.exports = router;



