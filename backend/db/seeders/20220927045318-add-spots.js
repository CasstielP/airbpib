'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

       return queryInterface.bulkInsert('Spots', [
        {
        ownerId: 1,
        address: '123 Lake Blvd',
        city: 'Lake Arrowhead',
        state: 'CA',
        country: 'United States',
        lat: 34.26,
        lng: -117.16,
        name: 'Oak Tree A-Frame',
        description: 'Every beautiful detail was planned with you in mind, because our passion is creating places for inviting people! Modern, Scandinavian, and mid-century inspired décor is as inviting and cozy as it is magazine worthy.',
        price: 325
       },
       {
        ownerId: 1,
        address: '456 Joshua ave',
        city: 'Yucca Valley',
        state: 'CA',
        country: 'United States',
        lat: 34.11,
        lng: -116.43,
        name: 'Black Butterfly, Pool & Spa',
        description: 'Black Butterfly is a special resort-style vacation retreat and newly build in 2022.',
        price: 495
       },
       {
        ownerId: 2,
        address: '789 big bear blvd',
        city: 'Big Bear',
        state: 'CA',
        country: 'United States',
        lat: 34.26,
        lng: -116.91,
        name: 'Luxury Retreat',
        description: "Luxurious retreat in Castle Glenn, Big Bear Lake's exclusive community. Close to the Village, Lake, Ski Resorts and shopping areas.",
        price: 199
       },
       {
        ownerId: 2,
        address: '1112 Rione street',
        city: 'Rome',
        state: 'Lazio',
        country: 'Italy',
        lat: 41.88,
        lng:12.47,
        name: 'Vibrant Updated Apartment',
        description: 'Discover the Eternal City from this bright home in an historical building.',
        price: 121
       }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Spots');
  }
};
