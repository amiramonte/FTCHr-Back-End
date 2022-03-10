// Imports
const router = require("express").Router();

const conversationRoutes = require('./conversation-routes')
const messageRoutes = require('./message-routes')

router.use('/conversations', conversationRoutes);
router.use('/messages', messageRoutes);
// Defining Variables for routes
const userRoutes = require("./user-routes");
const petRoutes = require("./pet-routes");
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");



// Routes
router.use("/user", userRoutes);
router.use("/pet", petRoutes);
router.use("/post", postRoutes);
router.use("/comment", commentRoutes);



module.exports = router;
