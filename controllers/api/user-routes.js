const router = require('express').Router();
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

        req.session.save(() => {
            req.session.userId = currentUser.id;
            req.session.username = currentUser.user_name;
            req.session.loggedIn = true;

            return res.status(200).json({ currentUser, message: "you are now logged in!" });
        })


    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
})


// SIGN OUT route for user
router.post('/sign-out', async(req,res) => {
    try {
        req.session.destroy();
        return res.status(200).json({message: "You have successfully signed out!"});
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
})


// TEMPORARY GET route for session data
router.get('/showsessions', (req,res) => {
    res.send(req.session);
})

module.exports = router;