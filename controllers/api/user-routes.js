const router = require('express').Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();
const {User, Pet, Post, Comment, Conversation, Message} = require("../../models");


// The `api/user` route endpoint

// GET route for all users and associated pets, posts, and comments
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


// GET route for single user and associated pets, posts, and comments
router.get('/getsingleuser/:id', async(req, res) => {
    try {
        const singleUser = await User.findByPk(req.params.id, {
            include: [Pet, Post, Comment]
        })

        res.status(200).json(singleUser);
        
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
})





// SIGN IN route for user
router.post('/sign-in', async(req, res) => {
    try {
        const currentUser = await User.findOne({
            where: { user_name: req.body.user_name },
        })

        if (!currentUser) {
            return res.status(400).json({message: "Invalid username/password. Please try again."});
        }

        const validPassword = currentUser.checkPassword(req.body.user_password);

        if (!validPassword) {
            return res.status(400).json({message: "Invalid username/password. Please try again."});
        }

        const userToken = jwt.sign(
            {
                id: currentUser.id,
                user_name: currentUser.user_name,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "2h"
            })

        return res.status(200).json({ currentUser, userToken, message: "you are now logged in!" });


    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
})


// SIGN OUT route for user
// TODO: SET UP SIGN OUT TO REMOVE TOKEN INFORMATION
router.post('/sign-out', async(req,res) => {
    try {
        
        return res.status(200).json({message: "You have successfully signed out!"});
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
})


// SIGN UP route for new user
// TODO: add jwt functionality for this route
router.post('/sign-up', async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        
        res.status(200).json(newUser);

    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
})

module.exports = router;