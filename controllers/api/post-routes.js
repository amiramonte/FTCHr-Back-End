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


// GET route for single post & associated User and Comment data
router.get('/getsinglepost/:id', async(req, res) => {
    try {
        const singlePost = await Post.findByPk(req.params.id, {
            include: [User, Comment]
        })

        res.status(200).json(singlePost);
        
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
})



// Add new Post route
router.post('/addpost', async (req, res) => {
    try {
        const newPost = await Post.create(req.body)

        res.status(200).json(newPost);

    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
})




// Update single post route
router.put('/updatepost/:id', async(req, res) => {
    try {
        const updatePost = await Post.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        return res.status(200).json(updatePost);

    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
})




// Delete single post route
router.delete('/deletepost/:id',  async(req, res) => {
    try {
        const deletePost = await Post.destroy({
            where: {
                id: req.params.id
            }
        })

        return res.status(200).json(deletePost);

    } catch (error) {
        return res.status(400).json(error)
    }
})



module.exports = router;