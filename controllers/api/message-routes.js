const router = require('express').Router();
const { Message } = require('../../models');

// create a new conversation
router.post("/", async (req, res) => {
    console.log("generating new message")
    try {
        const newMessage = await Message.create({
            
        })

        res.json(newMessage) 
    } catch(err) {
        res.status(500).json(err);
    }
});
// get conversation of the user

router.get("/:conversationId", async (req, res) => {
    console.log("retrieving conversation")
})
module.exports = router