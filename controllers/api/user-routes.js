const router = require('express').Router();
const {User, Pet, Post, Comment, Conversation, Message} = require("../../models");


// The `api/user` route endpoint

router.get('/getallusers', async(req, res) => {
    try {
        const allUsers = await User.findAll({
            include: [Pet, Post, Comment]
        })

        res.status(200).json(allUsers);
        
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
})



module.exports = router;