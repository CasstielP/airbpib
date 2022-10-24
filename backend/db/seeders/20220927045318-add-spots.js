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
       },
       {
        ownerId: 2,
        address: '123 beverlyhill blvd',
        city: 'Beverly Hills',
        state: 'CA',
        country: 'United States',
        lat: 11,
        lng: 12,
        name: 'Beverly Hills Villa',
        description: "Fantastic place - exactly as appears in the pictures and then some.",
        price: 588
       },
       {
        ownerId: 2,
        address: '456 oregon blvd',
        city: 'Dundee',
        state: 'OR',
        country: 'United States',
        lat: 13,
        lng: 6.91,
        name: 'Luxury Villa ',
        description: "Welcome to Del Mar Villa, a 26,000+ sq ft luxury Italian Chateau inspired Villa on 46 acres in the heart of Oregon Wine County ",
        price: 889
       },
       {
        ownerId: 2,
        address: '789 sunset blvd',
        city: 'Los Angeles',
        state: 'CA',
        country: 'United States',
        lat: 4.26,
        lng: 16.91,
        name: 'Villa Blue',
        description: "One of the most coveted properties available, offering unparalleled views & proximity to the legendary Sunset Strip. Penned by renowned Paul McClean",
        price: 1999
       },
       {
        ownerId: 2,
        address: '78 offroad jt road',
        city: 'joshua tree',
        state: 'CA',
        country: 'United States',
        lat: 18,
        lng: 91,
        name: 'in dreams 1963 airstream',
        description: "Our newly remodeled 1963 airstream is modern and rustic all at once. Laze around in the spacious king casper bed while gazing out the window at the fields of Joshua Trees",
        price: 558
       },
       {
        ownerId: 2,
        address: '7785 cali blvd',
        city: 'Pioneertown',
        state: 'CA',
        country: 'United States',
        lat: 36,
        lng: 71,
        name: 'Sol to Soul named by Condé Nast',
        description: "When’s the last time you felt wildly alive? We built this luxury, 10-acre sanctuary from the ground up for you to merge with the otherworldly and experience the sorcery and enchantment of silence, space, and the stars",
        price: 358
       },
       {
        ownerId: 2,
        address: '789 summit bear blvd',
        city: 'Yucca Valley',
        state: 'CA',
        country: 'United States',
        lat: 56,
        lng: 58,
        name: 'Summit House Joshua Tree',
        description: "Experience your “island in the sky” at this iconic estate perched high above the desert valley.",
        price: 1450
       },
       {
        ownerId: 2,
        address: '5288 limon blvd',
        city: 'el limon',
        state: 'samana',
        country: 'Dominican Republic',
        lat: 86,
        lng: 61,
        name: 'Villa Arrecife Beach House',
        description: "Feel like exploring the Dominican? Start the day with a hike on one of Playa Morons many trails.",
        price: 3000
       },
       {
        ownerId: 2,
        address: '789 san martin blvd',
        city: 'collectivitie de saint martin',
        state: 'terres basses',
        country: 'StMartin',
        lat: 17,
        lng: 18,
        name: 'Villa Mirabelle',
        description: "Sun glances off a rock formation and slants through a pergola at this waterfront home on St. Martin’s Simpson Bay Lagoon. ",
        price: 1965
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
