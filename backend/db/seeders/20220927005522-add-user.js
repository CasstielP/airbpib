'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Harry',
        lastName: 'Potter',
        username: 'harry-potter',
        email: 'hpotter@user.io',
        hashedPassword: bcrypt.hashSync('password4')
      },
      {
        firstName: 'Hermione',
        lastName: 'Granger',
        username: 'hermione-granger',
        email: 'hgranger@user.io',
        hashedPassword: bcrypt.hashSync('password5')
      },
      {
        firstName: 'Ron',
        lastName: 'Weasley',
        username: 'ron-weasley',
        email: 'rweasley@user.io',
        hashedPassword: bcrypt.hashSync('password6')
      },
      {
        firstName: 'Draco',
        lastName: 'Malfoy',
        username: 'draco-malfoy',
        email: 'dmolfoy@user.io',
        hashedPassword: bcrypt.hashSync('password7')
      },
      {
        firstName: 'Luna',
        lastName: 'Lovegood',
        username: 'luna-lovegood',
        email: 'llovegood@user.io',
        hashedPassword: bcrypt.hashSync('password8')
      },
      {
        firstName: 'Neville',
        lastName: 'Longbottom',
        username: 'neville-longbottom',
        email: 'nlongbottom@user.io',
        hashedPassword: bcrypt.hashSync('password9')
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['harry-potter', 'hermione-granger', 'ron-weasley',
      'draco-malfoy','luna-lovegood','neville-longbottom'] }
    }, {});
  }
};
