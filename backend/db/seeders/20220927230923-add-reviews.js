'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

   await queryInterface.bulkInsert('Reviews', [
    {
      spotId:1,
      userId:2,
      review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. A erat nam at lectus urna. Nisl tincidunt eget nullam non nisi est sit amet facilisis.',
      stars: 4
    },
    // {
    //   spotId:1,
    //   userId:2,
    //   review:'average',
    //   stars: 2.5
    // },
    {
      spotId:2,
      userId:1,
      review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. A erat nam at lectus urna. Nisl tincidunt eget nullam non nisi est sit amet facilisis.',
      stars:5
    },
    // {
    //   spotId:2,
    //   userId:1,
    //   review:'below average',
    //   stars:2
    // },
    {
      spotId:3,
      userId:2,
      review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. A erat nam at lectus urna. Nisl tincidunt eget nullam non nisi est sit amet facilisis.',
      stars:4.5
    },
    // {
    //   spotId:3,
    //   userId:2,
    //   review:'awesome',
    //   stars:4.5
    // },
    {
      spotId:4,
      userId:2,
      review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. A erat nam at lectus urna. Nisl tincidunt eget nullam non nisi est sit amet facilisis.',
      stars:5
    },
    // {
    //   spotId:4,
    //   userId:2,
    //   review:'wonderful',
    //   stars:5
    // }
   ])
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Reviews')
  }
};
