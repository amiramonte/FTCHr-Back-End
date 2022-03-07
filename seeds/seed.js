// Imports
const sequelize = require('../config/configuration');
const {User, Pet, Post, Comment, Conversation, Message} = require('../models');

// User Seed Data
// TODO: add needed association seed data after table associations successfully built
const users = [
    {
        user_name: "amiramonte",
        user_email: "alex.r.miramontes@gmail.com",
        user_password: "password",
        user_phonenumber: 4252061234
    },
    {
        user_name: "acanthodoris",
        user_email: "rebeccah.May@gmail.com",
        user_password: "password1",
        user_phonenumber: 1234567981
    },
    {
        user_name: "truont2",
        user_email: "truont2@gmail.com",
        user_password: "password2",
        user_phonenumber: 9876543219
    },
    {
        user_name: "andrewtranmsw",
        user_email: "andrewtranmsw@gmail.com",
        user_password: "password3",
        user_phonenumber: 2068675309
    },

]

// Pet seed data
// TODO: add needed association seed data after table associations successfully built
const pets = [
    {
        pet_name: "Odesza",
        pet_species: "Dog",
        pet_age: 2,
        pet_personality: "High Energy",
        pet_size: 45,
        pet_breed: "Mini Australian Shepard"
    },
    {
        pet_name: "",
        pet_species: "",
        pet_age: 3,
        pet_personality: "",
        pet_size: 95,
        pet_breed: ""
    },
    {
        pet_name: "",
        pet_species: "",
        pet_age: 4,
        pet_personality: "",
        pet_size: 10,
        pet_breed: ""
    },
    {
        pet_name: "",
        pet_species: "",
        pet_age: 5,
        pet_personality: "",
        pet_size: 20,
        pet_breed: ""
    },

]


// Post seed data
// TODO: add needed association seed data after table associations successfully built
const posts = [
    {
        post_title: "Playdate with Odesza",
        post_content: "I will be at Discovery Park with Odesza until 3pm!",
    },
    {
        post_title: "Playdate with Goose, my pet duck!",
        post_content: "Goose is my pet duck! He loves playing with dogs.",
    },
    {
        post_title: "Playdate with Brock the pet rock!",
        post_content: "Brock is pretty excellent. He doesn't say much...or do much. But he is pretty excellent.",
    },
    {
        post_title: "Gonna be walking Kibbles, my pet cat",
        post_content: "I'll be walking around the park with Kibbles, my pet cat this afternoon.",
    },

]



const seed = async () => {
    await sequelize.sync({force:true});
    await User.bulkCreate(users, {individualHooks:true});
    await Pet.bulkCreate(pets);
    await Post.bulkCreate(posts);
    console.log("Seeding Successful!");
    process.exit(0);

}

// TODO: CALL SEED FUNCTION DOWN HERE