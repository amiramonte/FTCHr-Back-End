const router = require('express').Router();
const {User, Pet, Post, Comment, Conversation, Message} = require("../../models");


// The `api/pet` route endpoint

router.get('/getallpets', async(req, res) => {
    try {
        const allPets = await Pet.findAll({
            include: [User]
        })

        res.status(200).json(allPets);
        
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
})



module.exports = router;