'use strict';
const { random } = require('faker');
const faker = require('faker');
module.exports = {
  up: async (queryInterface, Sequelize) => {
  /*
     const usersData = [];
     const roles = ['admin','author','guest']
    

     for (let i = 0; i < 20; i++) {
         const date = faker.date.past()
         const user = {
             username: faker.internet.userName(),
             email: faker.internet.email(),
             password:faker.internet.password(),
             role:faker.helpers.randomize(roles),
             createdAt:date,
             updatedAt: date
         }
         usersData.push(user)
        }
        const objs = queryInterface.bulkInsert('Users', usersData);
        console.log(objs);
         return objs;
     */
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};

