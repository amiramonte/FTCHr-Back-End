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

// The `api/pet` route endpoint

// GET route for all pets
router.get("/getallpets", async (req, res) => {
  try {
    const allPets = await Pet.findAll({
      include: [User],
    });

    res.status(200).json(allPets);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

// GET route for single pet and associated user(owner) data
router.get("/getsinglepet/:id", async (req, res) => {
  try {
    const singlePet = await Pet.findByPk(req.params.id, {
      include: [User],
    });

    res.status(200).json(singlePet);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

// Add pet route
router.post("/addpet", tokenAuth, async (req, res) => {
  try {
    const newPet = await Pet.create({
      pet_name: req.body.pet_name,
      pet_species: req.body.pet_species,
      pet_age: req.body.pet_age,
      pet_personality: req.body.pet_personality,
      pet_size: req.body.pet_size,
      pet_breed: req.body.pet_breed,
      pet_photo: req.body.pet_photo,
      UserId: req.user,
    });

    res.status(200).json(newPet);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

// Update pet route
router.put("/updatepet/:id", async (req, res) => {
  try {
    const updatePet = await Pet.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json(updatePet);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

// Delete pet route
router.delete("/deletepet/:id", async (req, res) => {
  try {
    const deletePet = await Pet.destroy({
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json(deletePet);
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
