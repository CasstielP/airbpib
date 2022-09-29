'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

   await queryInterface.bulkInsert('Reviews', [
    {
      spotId:1,
      userId:1,
      review:'good',
      stars: 4
    },
    {
      spotId:1,
      userId:1,
      review:'average',
      stars: 2.5
    },
    {
      spotId:2,
      userId:1,
      review:'excellent',
      stars:5
    },
    {
      spotId:2,
      userId:1,
      review:'below average',
      stars:2
    },
    {
      spotId:3,
      userId:2,
      review:'great',
      stars:4.5
    },
    {
      spotId:3,
      userId:2,
      review:'awesome',
      stars:4.5
    },
    {
      spotId:4,
      userId:2,
      review:'splendid',
      stars:5
    },
    {
      spotId:4,
      userId:2,
      review:'wonderful',
      stars:5
    }
   ])
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Reviews')
  }
};
