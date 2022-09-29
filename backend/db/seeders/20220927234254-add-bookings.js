'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

   await queryInterface.bulkInsert('Bookings', [
    {
      spotId:1,
      userId:6,
      startDate:new Date('09/30/2022'),
      endDate: new Date('10/10/2022')
    },
    {
      spotId:2,
      userId:7,
      startDate:new Date('10/01/2022'),
      endDate: new Date('10/07/2022')
    },
    {
      spotId:3,
      userId:8,
      startDate:new Date('11/01/2022'),
      endDate: new Date('11/20/2022')
    },
    {
      spotId:4,
      userId:9,
      startDate:new Date('12/20/2022'),
      endDate: new Date('01/02/2023')
    }
   ], {})
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Bookings')
  }
};
