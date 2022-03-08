const router = require('express').Router();
const {User, Pet, Post, Comment, Conversation, Message} = require("../../models");


// The `api/comment` route endpoint

router.get('/getallcomments', async(req, res) => {
    try {
        const allComments = await Comment.findAll({
            include: [User, Post]
        })

        res.status(200).json(allComments);
        
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
})



module.exports = router;