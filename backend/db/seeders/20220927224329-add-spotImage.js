'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('SpotImages', [
      {
        spotId: 1,
<<<<<<< HEAD
        url: 'https://cis3110fall2021pi.s3.us-west-1.amazonaws.com/aAMod5ProFiles/lakeArrowHead.png',
=======
        url: 'https://cis3110fall2021pi.s3.us-west-1.amazonaws.com/aAMod5ProFiles/lakeArrowHead02.png',
>>>>>>> coffeestudy
        preview: true
      },
      {
        spotId: 2,
        url: 'https://cis3110fall2021pi.s3.us-west-1.amazonaws.com/aAMod5ProFiles/yuccavalley.png',
<<<<<<< HEAD
        preview: false
=======
        preview: true
>>>>>>> coffeestudy
      },
      {
        spotId: 3,
        url: 'https://cis3110fall2021pi.s3.us-west-1.amazonaws.com/aAMod5ProFiles/bigBear.png',
<<<<<<< HEAD
        preview: false
=======
        preview: true
>>>>>>> coffeestudy
      },
      {
        spotId: 4,
        url: 'https://cis3110fall2021pi.s3.us-west-1.amazonaws.com/aAMod5ProFiles/Rome.png',
<<<<<<< HEAD
        preview: false
=======
        preview: true
>>>>>>> coffeestudy
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('SpotImages')
  }
};
