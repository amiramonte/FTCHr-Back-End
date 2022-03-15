const router = require("express").Router();
const tokenAuth = require("../../utils/jwtauthorization");
const {
  User,
  Pet,
  Post,
  Comment,
  Conversation,
  Message,
} = require("../../models");

// The `api/post` route endpoint

router.get("/getallposts", async (req, res) => {
  try {
    const allPosts = await Post.findAll({
      include: [User, { model: Comment, include: [User] }],
      order: [["id", "DESC"]],
    });
    console.log(allPosts, "This is whatever");
    res.status(200).json(allPosts);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

// GET route for single post & associated User and Comment data
router.get("/getsinglepost/:id", async (req, res) => {
  try {
    const singlePost = await Post.findByPk(req.params.id, {
      include: [User, Comment],
    });

    res.status(200).json(singlePost);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

// Add new Post route
router.post("/addpost", tokenAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      post_title: req.body.post_title,
      post_content: req.body.post_content,
      UserId: req.user,
      post_photo: req.body.post_photo,
      post_latitude: req.body.post_latitude,
      post_longitude: req.body.post_longitude,
    });

    res.status(200).json(newPost);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

// Update single post route
router.put("/updatepost/:id", async (req, res) => {
  try {
    const updatePost = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json(updatePost);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

// Delete single post route
router.delete("/deletepost/:id", async (req, res) => {
  try {
    const deletePost = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json(deletePost);
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
