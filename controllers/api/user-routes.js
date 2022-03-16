const router = require('express').Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();
const tokenAuth = require("../../utils/jwtauthorization");
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

router.get('/getuser/:username', async(req, res) => {
    try {
        const singleUsername = await User.findOne({
            where: {
                user_name: req.params.username
            }
        });
        res.status(200).json(singleUsername); 
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
})


// GET route for logged in user information
router.get("/verifieduser", tokenAuth, async (req,res)=>{
    try {
        console.log(req.user, "req.user")
        const loggedInUser = await User.findOne({
            where:{
                id:req.user
            },
            include:[Pet, Post, Comment]
        })
        console.log(loggedInUser, "logged in user data")
        res.json(loggedInUser);

    } catch(err){
        console.log(err);
        res.status(500).json({err})
    }
})






// SIGN IN route for user
router.post('/sign-in', async(req, res) => {
    try {
        const currentUser = await User.findOne({
            where: { user_email: req.body.user_email },
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

        console.log(userToken);
        return res.status(200).json({userToken, user: currentUser})


    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
})

// create a route to get the token information


// SIGN OUT route for user
router.post('/sign-out', async(req,res) => {
    try {
        return res.status(200).json({message: "You have successfully signed out!"});
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
})


// SIGN UP route for new user
router.post('/sign-up', async (req, res) => {
    try {
        const newUser = await User.create(req.body)

        const userToken = jwt.sign(
            {
                id: newUser.id,
                user_name: newUser.user_name,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "2h"
            })

        
        res.status(200).json({newUser: newUser, userToken: userToken});

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})


module.exports = router;