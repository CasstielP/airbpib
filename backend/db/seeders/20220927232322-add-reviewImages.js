'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const reviewImg = [

      {
        reviewId:1,
        url:'https://a0.muscache.com/im/pictures/e66a3061-3850-4e73-a4ca-b14952a49041.jpg?im_w=1440'
      },
      {
        reviewId:2,
        url:'https://a0.muscache.com/im/pictures/c6655e2e-1f13-4b3a-8e7e-f8540b6ab0e5.jpg?im_w=1440'
      },
      {
        reviewId:3,
        url:'https://a0.muscache.com/im/pictures/miso/Hosting-593420125710132336/original/55d17b93-1e9a-46fe-970d-1921a0ac8bb4.jpeg?im_w=1440'
      },
      {
        reviewId:4,
        url:'https://a0.muscache.com/im/pictures/miso/Hosting-593420125710132336/original/5bc0a007-9e1f-4610-be43-c7ce44a8230c.jpeg?im_w=1440'
      },
      // {
      //   reviewId:5,
      //   url:'https://a0.muscache.com/im/pictures/miso/Hosting-53740833/original/2d8fcf08-94cb-4de0-945c-78ed93391ad0.jpeg?im_w=1440'
      // },
      // {
      //   reviewId:6,
      //   url:'https://a0.muscache.com/im/pictures/miso/Hosting-53740833/original/910972e7-3892-47b5-8bc5-4ed4384ac8e9.jpeg?im_w=1440'
      // },
      // {
      //   reviewId:7,
      //   url:'https://a0.muscache.com/im/pictures/miso/Hosting-39876677/original/ee04f012-efe3-4c23-96c9-bb25360d6b2f.jpeg?im_w=1440'
      // },
      // {
      //   reviewId:8,
      //   url:'https://a0.muscache.com/im/pictures/miso/Hosting-39876677/original/5449ba2a-6ac1-45ca-8d6c-60cc2d3f9383.jpeg?im_w=1440'
      // }
    ]

   await queryInterface.bulkInsert('ReviewImages', reviewImg, {})
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('ReviewImages')
  }
};
