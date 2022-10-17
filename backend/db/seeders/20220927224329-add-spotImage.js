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
        url: 'https://cis3110fall2021pi.s3.us-west-1.amazonaws.com/aAMod5ProFiles/lakeArrowHead.png',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://cis3110fall2021pi.s3.us-west-1.amazonaws.com/aAMod5ProFiles/yuccavalley.png',
        preview: false
      },
      {
        spotId: 3,
        url: 'https://cis3110fall2021pi.s3.us-west-1.amazonaws.com/aAMod5ProFiles/bigBear.png',
        preview: false
      },
      {
        spotId: 4,
        url: 'https://cis3110fall2021pi.s3.us-west-1.amazonaws.com/aAMod5ProFiles/Rome.png',
        preview: false
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
