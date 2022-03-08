const router = require("express").Router();

const conversationRoutes = require('./conversation-routes')
const messageRoutes = require('./message-routes')

router.use('/conversation', conversationRoutes);
router.use('/message', messageRoutes);

module.exports = router;
