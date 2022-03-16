// Imports
const sequelize = require("../config/configuration");
const {
  User,
  Pet,
  Post,
  Comment,
  Conversation,
  Message,
} = require("../models");

// User Seed Data
const users = [
  {
    user_name: "amiramonte",
    user_email: "alex.r.miramontes@gmail.com",
    user_password: "password",
    user_photo:
      "https://res.cloudinary.com/ftchr/image/upload/v1647396704/ftchr/beautiful_surf_pic_yduvkv.webp",
  },
  {
    user_name: "acanthodoris",
    user_email: "rebeccah.May@gmail.com",
    user_password: "password",
    user_photo:
      "https://res.cloudinary.com/ftchr/image/upload/v1647397005/ftchr/20210814_1907342_g1kcx4.jpg",
  },
  {
    user_name: "truont2",
    user_email: "truont2@gmail.com",
    user_password: "password",
    user_photo:
      "https://res.cloudinary.com/ftchr/image/upload/v1647396493/ftchr/Image_from_iOS_znlskf.jpg",
  },
  {
    user_name: "andrewtranmsw",
    user_email: "andrewtranmsw@gmail.com",
    user_password: "password",
    user_photo:
      "https://res.cloudinary.com/ftchr/image/upload/v1647396575/ftchr/IMG_1811_mcqxm8.jpg",
  },
];

// Pet seed data
const pets = [
  {
    pet_name: "Odesza",
    pet_species: "Dog",
    pet_age: 2,
    pet_personality: "High Energy",
    pet_size: 45,
    pet_breed: "Mini Australian Shepard",
    UserId: 1,
    pet_photo:
      "https://upload.wikimedia.org/wikipedia/commons/3/36/Mini_Aussie.jpg",
  },
  {
    pet_name: "Gus",
    pet_species: "Dog",
    pet_age: 6,
    pet_personality: "High Energy, will kill your cat",
    pet_size: 75,
    pet_breed: "American Pitbull Terrier",
    UserId: 2,
    pet_photo:
      "https://upload.wikimedia.org/wikipedia/commons/e/e2/Pitbull_terrier_americano.JPG",
  },
  {
    pet_name: "River",
    pet_species: "Dog",
    pet_age: 8,
    pet_personality: "Potato",
    pet_size: 30,
    pet_breed: "Corgi",
    UserId: 3,
    pet_photo:
      "https://upload.wikimedia.org/wikipedia/commons/1/15/My_favorite_corgi_Meimei.jpg",
  },
  {
    pet_name: "Bubbles",
    pet_species: "Fish",
    pet_age: 5,
    pet_personality: "Shy and timid",
    pet_size: 2,
    pet_breed: "Goldfish",
    UserId: 4,
    pet_photo:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Sumbawa29_4-1-12_-_10_super_cute_blenny_%286695842701%29.jpg",
  },
];

// Post seed data
const posts = [
  {
    post_title: "Playdate with Odesza",
    post_content: "I will be at Discovery Park with Odesza until 3pm!",
    UserId: 1,
    post_latitude: 47.606,
    post_longitude: -122.329,
    post_photo:
      "https://upload.wikimedia.org/wikipedia/commons/3/36/Mini_Aussie.jpg",
  },
  {
    post_title: "Playdate with Bubbles, my pet fish!",
    post_content: "Bubbles is my pet fish! He loves playing with dogs.",
    UserId: 4,
    post_latitude: 47.606,
    post_longitude: -122.109,
    post_photo:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Sumbawa29_4-1-12_-_10_super_cute_blenny_%286695842701%29.jpg",
  },
  {
    post_title: "Playdate with River the pet dog!",
    post_content:
      "River is pretty excellent. She doesn't say much...or do much. But she is pretty excellent.",
    UserId: 3,
    post_latitude: 47.606,
    post_longitude: -122.129,
    post_photo:
      "https://upload.wikimedia.org/wikipedia/commons/1/15/My_favorite_corgi_Meimei.jpg",
  },
  {
    post_title: "Gonna be walking Gus, my pet dog",
    post_content:
      "I'll be walking around the park with Gus, my pet dog this afternoon.",
    UserId: 2,
    post_latitude: 47.606,
    post_longitude: -122.139,
    post_photo:
      "https://upload.wikimedia.org/wikipedia/commons/e/e2/Pitbull_terrier_americano.JPG",
  },
];

const comments = [
  {
    comment_body: "I'd like Takara to be there!",
    PostId: 1,
    UserId: 1,
  },
  {
    comment_body: "See you!!",
    PostId: 3,
    UserId: 2,
  },
  {
    comment_body: "I'd like Alex to be there!",
    PostId: 1,
    UserId: 3,
  },
  {
    comment_body: "I'd like Becca to be there!",
    PostId: 2,
    UserId: 4,
  },
];

const conversations = [
  {
    senderId: "truont2",
    recieverId: "amiramonte",
  },
];

const messages = [
  {
    conversationId: 1,
    sender: "amiramonte",
    text: "hello takara",
  },
  {
    conversationId: 1,
    sender: "truont2",
    text: "hello alex",
  },
];

const seed = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(users, { individualHooks: true });
  await Pet.bulkCreate(pets);
  await Post.bulkCreate(posts);
  await Comment.bulkCreate(comments);
  await Conversation.bulkCreate(conversations);
  await Message.bulkCreate(messages);
  console.log("Seeding Successful!");
  process.exit(0);
};

seed();
