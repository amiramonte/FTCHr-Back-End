const router = require('express').Router();
const {User, Pet, Post, Comment, Conversation, Message} = require("../../models");


// The `api/post` route endpoint

router.get('/getallposts', async(req, res) => {
    try {
        const allPosts = await Post.findAll({
            include: [User, Comment]
        })

        res.status(200).json(allPosts);
        
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
})



module.exports = router;