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
        url: 'https://cis3110fall2021pi.s3.us-west-1.amazonaws.com/aAMod5ProFiles/lakeArrowHead02.png',
        preview: true
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-47818404/original/448f2c61-285e-47da-94bf-2becedca42c4.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-47818404/original/54edef36-4b46-44c0-964a-031bbfb930f9.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-47818404/original/8672ab2d-e5f0-41fb-b995-10fefb03c39d.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-47818404/original/9ce1750b-e9ac-4167-8f82-e29b7e9d1a67.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://cis3110fall2021pi.s3.us-west-1.amazonaws.com/aAMod5ProFiles/yuccavalley.png',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-50066314/original/ddb102f4-311e-4027-8c98-ccef03a7ef6f.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-50066314/original/7a8cc8e9-22b8-4bf7-b883-e8049fdc4e92.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-50066314/original/50993ae9-ae2c-41fe-b754-5456ed37efca.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-50066314/original/5af6d29e-4c06-4da4-9a27-8919ac0724a3.jpeg?im_w=1440',
        preview: true
      },

      {
        spotId: 3,
        url: 'https://cis3110fall2021pi.s3.us-west-1.amazonaws.com/aAMod5ProFiles/bigBear.png',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-45943168/original/10dd919c-eecb-4c87-990d-a1089572953d.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-45943168/original/fc75f40e-2433-46d5-bcf2-af28f5f5383b.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-45943168/original/067c9eba-106e-40bc-aa49-01a9515fbd15.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-45943168/original/97cf2af4-637c-46c9-83f9-3879b556189e.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://cis3110fall2021pi.s3.us-west-1.amazonaws.com/aAMod5ProFiles/Rome.png',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/2dca10d2-f59f-45a1-b3ef-ed5f5a84a065.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/9e80e302-f68e-4a7e-89f9-902d0af3b1ef.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/428ba520-ba86-49cd-a7a7-f9d94310d8f4.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/bf8918e5-c184-4a3a-bcf9-01b1dae8bbdf.jpg?im_w=1440',
        preview: true
      },

      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-36693929/original/a07c0a98-ca2d-4d8f-8980-69794c798a53.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-36693929/original/a4da0462-59b3-4438-afe4-47f24849e6d2.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-36693929/original/2c6e4930-8554-4306-968c-0616df0e4e95.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-36693929/original/da8326e6-5dc3-4be5-9210-b6dc0b51a747.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-36693929/original/ea73602c-ebb0-4c63-92ad-2491eda59115.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51850601/original/b2c5af95-6ede-4f6c-ad8b-2dbef87443ff.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51850601/original/68788115-fc36-4a84-ad44-e55cf4f85cb3.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51850601/original/f2880663-2a15-4cc8-8aaa-f5e93f3c5580.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51850601/original/a647fc6c-9604-40eb-9c4e-7891931e9074.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51850601/original/75b0e5ff-4f71-48fa-ae4a-051c1f39a3fe.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/0eb500ca-0f15-4889-9e1b-6156699b9505.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/3471bce5-a372-46b0-a24a-c00eebd72ee0.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/d63e4a91-4cd1-468f-9811-8a8c57467bbd.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/25e1702c-28cf-478e-ba66-6488d8406b4a.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/b5f82f86-b7e3-4094-9b22-6cb32e0202d0.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/6c9a9a99-9c38-417e-a7f5-a45ede9b3407.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-21515483/original/7000eee2-da37-4c44-baea-dcb2ee037c6d.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-21515483/original/b2f12cd4-7752-4993-82e8-7ae782a48148.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-21515483/original/88f480c3-0ff1-4c75-8495-337c00da316b.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/093daeee-ab20-461d-a9b0-6439d03a9dd1.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/141d2945-0d2c-45ae-b108-246447071fde.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-39271504/original/2b354d98-e8fc-4d02-b888-43f05f3ade54.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-39271504/original/78605b28-875b-4197-91d9-7aec8cd6b1f8.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/8d6b5a68-1f5c-41b5-8065-d601267265b1.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-39271504/original/da4576d3-17a5-43a6-a737-f35bed51f223.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-32844842/original/64af09aa-4774-4a7d-b431-f4fb4a44a390.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 10,
        url: 'https://cis3110fall2021pi.s3.us-west-1.amazonaws.com/yuccavalley1.png',
        preview: true
      },
      {
        spotId: 10,
        url: 'https://cis3110fall2021pi.s3.us-west-1.amazonaws.com/yuccavalley2.png',
        preview: true
      },
      {
        spotId: 10,
        url: 'https://cis3110fall2021pi.s3.us-west-1.amazonaws.com/yuccavalley3.png',
        preview: true
      },
      {
        spotId: 10,
        url: 'https://cis3110fall2021pi.s3.us-west-1.amazonaws.com/yuccavalley4.png',
        preview: true
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-51983675/original/d09ecd34-1578-4846-a096-8e3c4643f100?im_w=1440',
        preview: true
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-51983675/original/fc03152f-93bc-4c67-9b8c-0a7aa681c05e?im_w=1440',
        preview: true
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-51983675/original/43ae520f-8986-4647-91de-457c85fdb3a3?im_w=1440',
        preview: true
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-51983675/original/b0411757-b4ab-4d87-8660-ac630215ca5f?im_w=1440',
        preview: true
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-51983675/original/f69c4d0d-822c-4dc3-a5a3-70e427c12692?im_w=1440',
        preview: true
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-570973165437649140/original/5b3872b7-fc85-4e67-bd3b-dc69e298dae3?im_w=1440',
        preview: true
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-570973165437649140/original/a75c5d44-4508-4538-a720-21dc0e1c56b8?im_w=1440',
        preview: true
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-570973165437649140/original/1ce06ef9-ade7-4099-be2d-ee778a54c228?im_w=1440',
        preview: true
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-570973165437649140/original/90de688e-3961-47da-b35d-8f4bc85210e4?im_w=1440',
        preview: true
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-570973165437649140/original/dad5a7aa-cf35-44a6-9ef2-5f37d1ef7a6f?im_w=1440',
        preview: true
      },
      {
        spotId: 13,
        url: 'https://cis3110fall2021pi.s3.us-west-1.amazonaws.com/aAMod5ProFiles/lakeArrowHead02.png',
        preview: true
      },
      {
        spotId: 13,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-47818404/original/448f2c61-285e-47da-94bf-2becedca42c4.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 13,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-47818404/original/54edef36-4b46-44c0-964a-031bbfb930f9.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 13,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-47818404/original/8672ab2d-e5f0-41fb-b995-10fefb03c39d.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 13,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-47818404/original/9ce1750b-e9ac-4167-8f82-e29b7e9d1a67.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 14,
        url: 'https://cis3110fall2021pi.s3.us-west-1.amazonaws.com/aAMod5ProFiles/yuccavalley.png',
        preview: true
      },
      {
        spotId: 14,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-50066314/original/ddb102f4-311e-4027-8c98-ccef03a7ef6f.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 14,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-50066314/original/7a8cc8e9-22b8-4bf7-b883-e8049fdc4e92.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 14,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-50066314/original/50993ae9-ae2c-41fe-b754-5456ed37efca.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 14,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-50066314/original/5af6d29e-4c06-4da4-9a27-8919ac0724a3.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 15,
        url: 'https://cis3110fall2021pi.s3.us-west-1.amazonaws.com/aAMod5ProFiles/bigBear.png',
        preview: true
      },
      {
        spotId: 15,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-45943168/original/10dd919c-eecb-4c87-990d-a1089572953d.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 15,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-45943168/original/fc75f40e-2433-46d5-bcf2-af28f5f5383b.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 15,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-45943168/original/067c9eba-106e-40bc-aa49-01a9515fbd15.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 15,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-45943168/original/97cf2af4-637c-46c9-83f9-3879b556189e.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 16,
        url: 'https://cis3110fall2021pi.s3.us-west-1.amazonaws.com/aAMod5ProFiles/Rome.png',
        preview: true
      },
      {
        spotId: 16,
        url: 'https://a0.muscache.com/im/pictures/2dca10d2-f59f-45a1-b3ef-ed5f5a84a065.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 16,
        url: 'https://a0.muscache.com/im/pictures/9e80e302-f68e-4a7e-89f9-902d0af3b1ef.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 16,
        url: 'https://a0.muscache.com/im/pictures/428ba520-ba86-49cd-a7a7-f9d94310d8f4.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 16,
        url: 'https://a0.muscache.com/im/pictures/bf8918e5-c184-4a3a-bcf9-01b1dae8bbdf.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 17,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-36693929/original/a07c0a98-ca2d-4d8f-8980-69794c798a53.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 17,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-36693929/original/a4da0462-59b3-4438-afe4-47f24849e6d2.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 17,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-36693929/original/2c6e4930-8554-4306-968c-0616df0e4e95.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 17,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-36693929/original/da8326e6-5dc3-4be5-9210-b6dc0b51a747.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 17,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-36693929/original/ea73602c-ebb0-4c63-92ad-2491eda59115.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 18,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51850601/original/b2c5af95-6ede-4f6c-ad8b-2dbef87443ff.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 18,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51850601/original/68788115-fc36-4a84-ad44-e55cf4f85cb3.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 18,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51850601/original/f2880663-2a15-4cc8-8aaa-f5e93f3c5580.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 18,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51850601/original/a647fc6c-9604-40eb-9c4e-7891931e9074.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 18,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51850601/original/75b0e5ff-4f71-48fa-ae4a-051c1f39a3fe.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 19,
        url: 'https://a0.muscache.com/im/pictures/0eb500ca-0f15-4889-9e1b-6156699b9505.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 19,
        url: 'https://a0.muscache.com/im/pictures/3471bce5-a372-46b0-a24a-c00eebd72ee0.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 19,
        url: 'https://a0.muscache.com/im/pictures/d63e4a91-4cd1-468f-9811-8a8c57467bbd.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 19,
        url: 'https://a0.muscache.com/im/pictures/25e1702c-28cf-478e-ba66-6488d8406b4a.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 19,
        url: 'https://a0.muscache.com/im/pictures/b5f82f86-b7e3-4094-9b22-6cb32e0202d0.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 20,
        url: 'https://a0.muscache.com/im/pictures/6c9a9a99-9c38-417e-a7f5-a45ede9b3407.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 20,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-21515483/original/7000eee2-da37-4c44-baea-dcb2ee037c6d.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 20,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-21515483/original/b2f12cd4-7752-4993-82e8-7ae782a48148.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 20,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-21515483/original/88f480c3-0ff1-4c75-8495-337c00da316b.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 20,
        url: 'https://a0.muscache.com/im/pictures/093daeee-ab20-461d-a9b0-6439d03a9dd1.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 21,
        url: 'https://a0.muscache.com/im/pictures/141d2945-0d2c-45ae-b108-246447071fde.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 21,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-39271504/original/2b354d98-e8fc-4d02-b888-43f05f3ade54.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 21,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-39271504/original/78605b28-875b-4197-91d9-7aec8cd6b1f8.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 21,
        url: 'https://a0.muscache.com/im/pictures/8d6b5a68-1f5c-41b5-8065-d601267265b1.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 21,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-39271504/original/da4576d3-17a5-43a6-a737-f35bed51f223.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 22,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-32844842/original/64af09aa-4774-4a7d-b431-f4fb4a44a390.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 22,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-32844842/original/a0e30a8e-2cef-4037-9fec-eecf490aad69.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 22,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-32844842/original/18457ca3-54ad-4577-99a9-530c58de21d9.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 22,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-32844842/original/b4ee1818-a17a-419f-9659-72cf7b9f95bb.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 22,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-32844842/original/aa59b24a-599b-46ca-b839-c4fed2c34fd4.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 23,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-51983675/original/d09ecd34-1578-4846-a096-8e3c4643f100?im_w=1440',
        preview: true
      },
      {
        spotId: 23,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-51983675/original/fc03152f-93bc-4c67-9b8c-0a7aa681c05e?im_w=1440',
        preview: true
      },
      {
        spotId: 23,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-51983675/original/43ae520f-8986-4647-91de-457c85fdb3a3?im_w=1440',
        preview: true
      },
      {
        spotId: 23,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-51983675/original/b0411757-b4ab-4d87-8660-ac630215ca5f?im_w=1440',
        preview: true
      },
      {
        spotId: 23,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-51983675/original/f69c4d0d-822c-4dc3-a5a3-70e427c12692?im_w=1440',
        preview: true
      },
      {
        spotId: 24,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-570973165437649140/original/5b3872b7-fc85-4e67-bd3b-dc69e298dae3?im_w=1440',
        preview: true
      },
      {
        spotId: 24,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-570973165437649140/original/a75c5d44-4508-4538-a720-21dc0e1c56b8?im_w=1440',
        preview: true
      },
      {
        spotId: 24,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-570973165437649140/original/1ce06ef9-ade7-4099-be2d-ee778a54c228?im_w=1440',
        preview: true
      },
      {
        spotId: 24,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-570973165437649140/original/90de688e-3961-47da-b35d-8f4bc85210e4?im_w=1440',
        preview: true
      },
      {
        spotId: 24,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-570973165437649140/original/dad5a7aa-cf35-44a6-9ef2-5f37d1ef7a6f?im_w=1440',
        preview: true
      },
      {
        spotId: 25,
        url: 'https://cis3110fall2021pi.s3.us-west-1.amazonaws.com/aAMod5ProFiles/lakeArrowHead02.png',
        preview: true
      },
      {
        spotId: 25,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-47818404/original/448f2c61-285e-47da-94bf-2becedca42c4.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 25,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-47818404/original/54edef36-4b46-44c0-964a-031bbfb930f9.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 25,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-47818404/original/8672ab2d-e5f0-41fb-b995-10fefb03c39d.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 25,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-47818404/original/9ce1750b-e9ac-4167-8f82-e29b7e9d1a67.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 26,
        url: 'https://cis3110fall2021pi.s3.us-west-1.amazonaws.com/aAMod5ProFiles/yuccavalley.png',
        preview: true
      },
      {
        spotId: 26,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-50066314/original/ddb102f4-311e-4027-8c98-ccef03a7ef6f.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 26,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-50066314/original/7a8cc8e9-22b8-4bf7-b883-e8049fdc4e92.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 26,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-50066314/original/50993ae9-ae2c-41fe-b754-5456ed37efca.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 26,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-50066314/original/5af6d29e-4c06-4da4-9a27-8919ac0724a3.jpeg?im_w=1440',
        preview: true
      },

      {
        spotId: 27,
        url: 'https://cis3110fall2021pi.s3.us-west-1.amazonaws.com/aAMod5ProFiles/bigBear.png',
        preview: true
      },
      {
        spotId: 27,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-45943168/original/10dd919c-eecb-4c87-990d-a1089572953d.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 27,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-45943168/original/fc75f40e-2433-46d5-bcf2-af28f5f5383b.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 27,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-45943168/original/067c9eba-106e-40bc-aa49-01a9515fbd15.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 27,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-45943168/original/97cf2af4-637c-46c9-83f9-3879b556189e.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 28,
        url: 'https://cis3110fall2021pi.s3.us-west-1.amazonaws.com/aAMod5ProFiles/Rome.png',
        preview: true
      },
      {
        spotId: 28,
        url: 'https://a0.muscache.com/im/pictures/2dca10d2-f59f-45a1-b3ef-ed5f5a84a065.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 28,
        url: 'https://a0.muscache.com/im/pictures/9e80e302-f68e-4a7e-89f9-902d0af3b1ef.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 28,
        url: 'https://a0.muscache.com/im/pictures/428ba520-ba86-49cd-a7a7-f9d94310d8f4.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 28,
        url: 'https://a0.muscache.com/im/pictures/bf8918e5-c184-4a3a-bcf9-01b1dae8bbdf.jpg?im_w=1440',
        preview: true
      },

      {
        spotId: 29,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-36693929/original/a07c0a98-ca2d-4d8f-8980-69794c798a53.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 29,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-36693929/original/a4da0462-59b3-4438-afe4-47f24849e6d2.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 29,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-36693929/original/2c6e4930-8554-4306-968c-0616df0e4e95.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 29,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-36693929/original/da8326e6-5dc3-4be5-9210-b6dc0b51a747.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 29,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-36693929/original/ea73602c-ebb0-4c63-92ad-2491eda59115.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 30,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51850601/original/b2c5af95-6ede-4f6c-ad8b-2dbef87443ff.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 30,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51850601/original/68788115-fc36-4a84-ad44-e55cf4f85cb3.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 30,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51850601/original/f2880663-2a15-4cc8-8aaa-f5e93f3c5580.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 30,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51850601/original/a647fc6c-9604-40eb-9c4e-7891931e9074.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 30,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51850601/original/75b0e5ff-4f71-48fa-ae4a-051c1f39a3fe.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 31,
        url: 'https://a0.muscache.com/im/pictures/0eb500ca-0f15-4889-9e1b-6156699b9505.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 31,
        url: 'https://a0.muscache.com/im/pictures/3471bce5-a372-46b0-a24a-c00eebd72ee0.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 31,
        url: 'https://a0.muscache.com/im/pictures/d63e4a91-4cd1-468f-9811-8a8c57467bbd.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 31,
        url: 'https://a0.muscache.com/im/pictures/25e1702c-28cf-478e-ba66-6488d8406b4a.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 31,
        url: 'https://a0.muscache.com/im/pictures/b5f82f86-b7e3-4094-9b22-6cb32e0202d0.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 32,
        url: 'https://a0.muscache.com/im/pictures/6c9a9a99-9c38-417e-a7f5-a45ede9b3407.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 32,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-21515483/original/7000eee2-da37-4c44-baea-dcb2ee037c6d.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 32,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-21515483/original/b2f12cd4-7752-4993-82e8-7ae782a48148.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 32,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-21515483/original/88f480c3-0ff1-4c75-8495-337c00da316b.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 32,
        url: 'https://a0.muscache.com/im/pictures/093daeee-ab20-461d-a9b0-6439d03a9dd1.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 33,
        url: 'https://a0.muscache.com/im/pictures/141d2945-0d2c-45ae-b108-246447071fde.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 33,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-39271504/original/2b354d98-e8fc-4d02-b888-43f05f3ade54.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 33,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-39271504/original/78605b28-875b-4197-91d9-7aec8cd6b1f8.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 33,
        url: 'https://a0.muscache.com/im/pictures/8d6b5a68-1f5c-41b5-8065-d601267265b1.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 33,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-39271504/original/da4576d3-17a5-43a6-a737-f35bed51f223.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 34,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-32844842/original/64af09aa-4774-4a7d-b431-f4fb4a44a390.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 34,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-32844842/original/a0e30a8e-2cef-4037-9fec-eecf490aad69.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 34,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-32844842/original/18457ca3-54ad-4577-99a9-530c58de21d9.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 34,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-32844842/original/b4ee1818-a17a-419f-9659-72cf7b9f95bb.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 34,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-32844842/original/aa59b24a-599b-46ca-b839-c4fed2c34fd4.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 35,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-51983675/original/d09ecd34-1578-4846-a096-8e3c4643f100?im_w=1440',
        preview: true
      },
      {
        spotId: 35,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-51983675/original/fc03152f-93bc-4c67-9b8c-0a7aa681c05e?im_w=1440',
        preview: true
      },
      {
        spotId: 35,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-51983675/original/43ae520f-8986-4647-91de-457c85fdb3a3?im_w=1440',
        preview: true
      },
      {
        spotId: 35,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-51983675/original/b0411757-b4ab-4d87-8660-ac630215ca5f?im_w=1440',
        preview: true
      },
      {
        spotId: 35,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-51983675/original/f69c4d0d-822c-4dc3-a5a3-70e427c12692?im_w=1440',
        preview: true
      },
      {
        spotId: 36,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-570973165437649140/original/5b3872b7-fc85-4e67-bd3b-dc69e298dae3?im_w=1440',
        preview: true
      },
      {
        spotId: 36,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-570973165437649140/original/a75c5d44-4508-4538-a720-21dc0e1c56b8?im_w=1440',
        preview: true
      },
      {
        spotId: 36,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-570973165437649140/original/1ce06ef9-ade7-4099-be2d-ee778a54c228?im_w=1440',
        preview: true
      },
      {
        spotId: 36,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-570973165437649140/original/90de688e-3961-47da-b35d-8f4bc85210e4?im_w=1440',
        preview: true
      },
      {
        spotId: 36,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-570973165437649140/original/dad5a7aa-cf35-44a6-9ef2-5f37d1ef7a6f?im_w=1440',
        preview: true
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
