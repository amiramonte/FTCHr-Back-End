# FTCHr - Because Your Pets Need a Social Life Too

## Description

This is the repo for the back end of the FTCHr application. It includes back end API routes, models, database and server configuration. FTCHr allows pet owners to meet up with others near them to set up play dates for their pets. Users are able to create an account and log into the application. Upon login, users are greeted with an interactive map of post locations in their area. These post locations are created by users who are looking to find other people and pets to meet. The logged in user can create their own posts and their current estimated location will render on the map if location permission is granted. Users are also able to select any of the users in the application and create a live conversation with the direct messaging feature as well.

## Table of Contents

[Installation](#Installation)

[Usage](#Usage)

[License](#License)

[Technologies](#Technologies)

[Contributing](#Contributing)

[Tests](#Tests)

[Authors](#Authors)

## Installation (if Local Functionality Desired)

1. Clone the repo from https://github.com/amiramonte/FTCHr-Front-End, https://github.com/amiramonte/FTCHr-Back-End, and https://github.com/truont2/FTCHr-socket-io
2. Combine all the files into a single folder
3. Setup .env file with mysql login credentials in the Server repo
4. Open integrated terminal in each repo
5. Run "npm i" to install dependencies
6. Run schema file ("db/schema.sql") after connecting to mysql in the server repo
7. Run "npm run seed" to seed the database
8. Run "npm start" to boot up the server, front-end, and socket repo.
9. Connect to "http://localhost:3001" in your browser

## Usage

All routes can be tested locally using Postman or Insomnia. Routes can also be tested at https://ftchrbackend.herokuapp.com/. 

## License

GitHub

## Technologies

- [JavaScript](https://www.javascript.com/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://www.npmjs.com/package/express)
- [MySQL](https://www.npmjs.com/package/mysql)
- [Sequelize](https://sequelize.org/)
- [JsonWebTokens](https://jwt.io/)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Socket IO](https://socket.io/)

## Contribution

To contribute, contact any of us below!

## Tests

Please contact any of us if you find bugs to squash! 🐛🐜

## Authors

Checkout our Githubs!

- [AndrewTranMSW](https://github.com/AndrewTranMSW)
- [truont2](https://github.com/truont2)
- [Acanthodoris](https://github.com/Acanthodoris)
- [amiramonte](https://github.com/amiramonte)
