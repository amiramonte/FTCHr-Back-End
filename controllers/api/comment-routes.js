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



// GET route for single comment & associated User and Post data
router.get('/getsinglecomment/:id', async(req, res) => {
    try {
        const singleComment = await Comment.findByPk(req.params.id, {
            include: [User, Post]
        })

        res.status(200).json(singleComment);
        
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
})



// Add new Comment route
// TODO: Add withAuth from utils folder, once created
router.post('/addcomment', async (req, res) => {
    try {
        const newComment = await Comment.create(req.body)

        res.status(200).json(newComment);

    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
})




// Update single comment route
// TODO: Add withAuth from utils folder, once created
router.put('/updatecomment/:id', async(req, res) => {
    try {
        const updateComment = await Comment.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        return res.status(200).json(updateComment);

    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
})




// Delete single comment route
// TODO: Add withAuth from utils folder, once created
router.delete('/deletecomment/:id',  async(req, res) => {
    try {
        const deleteComment = await Comment.destroy({
            where: {
                id: req.params.id
            }
        })

        return res.status(200).json(deleteComment);

    } catch (error) {
        return res.status(400).json(error)
    }
})




module.exports = router;