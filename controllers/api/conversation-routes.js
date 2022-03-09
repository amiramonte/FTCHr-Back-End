const router = require('express').Router();
const { Conversation } = require('../../models');
const {Op} = require('@sequelize/core')

router.post('/', async (req, res) => {
    console.log("create new conversation");
    console.log(req.body);
    try {
        const newConversation = await Conversation.create({
           senderId: req.body.senderId,
           recieverId: req.body.recieverId
        })

        res.status(200).json(newConversation);
    } catch(err) {
        console.log(err);
        res.status(500).json(err)
    }
})


router.get('/:userId', async ( req, res) => {
    console.log("getting user conversatiojns")
    try {
        const convo = await Conversation.findAll({
            where: {
                [Op.or]: [
                    {senderId: req.params.userId},
                    {recieverId: req.params.userId}
                ]
            }
        })
        res.json(convo);
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
})
module.exports = router;