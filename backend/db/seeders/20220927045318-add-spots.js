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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
        description: 'Interdum varius sit amet mattis vulputate enim. Nunc sed velit dignissim sodales ut. Vitae nunc sed velit dignissim. In mollis nunc sed id semper risus. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. A scelerisque purus semper eget duis at tellus. Ut tortor pretium viverra suspendisse potenti nullam. Proin libero nunc consequat interdum varius sit amet. Quis eleifend quam adipiscing vitae proin sagittis nisl. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Turpis massa tincidunt dui ut ornare lectus sit amet est.',
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
        description: "Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Senectus et netus et malesuada fames. Etiam non quam lacus suspendisse faucibus. Congue quisque egestas diam in. Ultricies mi quis hendrerit dolor. Maecenas sed enim ut sem viverra aliquet. Id interdum velit laoreet id donec. Sit amet justo donec enim diam vulputate ut pharetra sit. Lacus vestibulum sed arcu non odio euismod. Ac turpis egestas maecenas pharetra convallis posuere. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Convallis a cras semper auctor. At elementum eu facilisis sed odio morbi quis commodo odio. Non pulvinar neque laoreet suspendisse interdum consectetur libero. Aliquet lectus proin nibh nisl condimentum id venenatis. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Libero volutpat sed cras ornare arcu dui. Hac habitasse platea dictumst vestibulum rhoncus est. Non pulvinar neque laoreet suspendisse.",
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
        description: 'Urna porttitor rhoncus dolor purus non enim praesent elementum. Turpis in eu mi bibendum neque. Quam id leo in vitae turpis massa sed elementum. Mattis molestie a iaculis at erat. Ac ut consequat semper viverra. Nunc consequat interdum varius sit amet mattis vulputate enim. Enim diam vulputate ut pharetra sit amet aliquam id. Amet aliquam id diam maecenas ultricies. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Lectus urna duis convallis convallis. Risus nec feugiat in fermentum posuere.',
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
        description: "Orci sagittis eu volutpat odio facilisis mauris sit amet. Ut morbi tincidunt augue interdum velit euismod in. Tortor dignissim convallis aenean et tortor at risus viverra. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Non blandit massa enim nec dui. Turpis in eu mi bibendum neque egestas. Habitant morbi tristique senectus et netus. Integer enim neque volutpat ac tincidunt vitae semper quis. Amet mattis vulputate enim nulla aliquet. Lobortis scelerisque fermentum dui faucibus in ornare. Quis imperdiet massa tincidunt nunc pulvinar.",
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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem. Molestie nunc non blandit massa enim nec dui nunc mattis. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Amet mauris commodo quis imperdiet massa tincidunt. Eros donec ac odio tempor orci dapibus ultrices in. Vel pharetra vel turpis nunc eget. Massa placerat duis ultricies lacus sed turpis tincidunt id. Urna id volutpat lacus laoreet non curabitur gravida. Ante metus dictum at tempor commodo ullamcorper. Dignissim diam quis enim lobortis. Volutpat commodo sed egestas egestas fringilla phasellus. Habitant morbi tristique senectus et netus et malesuada. Dictum non consectetur a erat nam at. Nunc sed blandit libero volutpat. Non tellus orci ac auctor augue. Ornare lectus sit amet est placerat in egestas erat imperdiet. ",
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
        description: "Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Posuere morbi leo urna molestie at elementum eu facilisis. Enim nunc faucibus a pellentesque sit. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Et netus et malesuada fames ac turpis egestas maecenas. Orci ac auctor augue mauris. Auctor urna nunc id cursus metus aliquam eleifend mi. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Fermentum iaculis eu non diam phasellus. Urna molestie at elementum eu. Gravida in fermentum et sollicitudin ac. Praesent tristique magna sit amet purus gravida quis. Integer quis auctor elit sed vulputate mi. Feugiat vivamus at augue eget arcu dictum varius. Morbi quis commodo odio aenean sed. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Lectus quam id leo in vitae. Quis vel eros donec ac. Nulla pharetra diam sit amet nisl suscipit.",
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
        description: "Integer enim neque volutpat ac tincidunt vitae semper. Lacinia quis vel eros donec ac odio. Vestibulum morbi blandit cursus risus at. Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis. Est velit egestas dui id ornare arcu odio. Sollicitudin aliquam ultrices sagittis orci. Bibendum neque egestas congue quisque egestas. Ultricies integer quis auctor elit sed vulputate mi. Augue eget arcu dictum varius duis at consectetur lorem donec. In metus vulputate eu scelerisque.",
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
        description: "Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Enim diam vulputate ut pharetra sit amet aliquam id diam. Eget sit amet tellus cras adipiscing enim eu. Ullamcorper eget nulla facilisi etiam. Aliquam ut porttitor leo a diam. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Turpis egestas integer eget aliquet nibh praesent. Auctor augue mauris augue neque gravida in fermentum. Odio facilisis mauris sit amet massa. Egestas diam in arcu cursus euismod. Cras ornare arcu dui vivamus arcu. Sit amet tellus cras adipiscing enim eu. Fringilla ut morbi tincidunt augue interdum. Enim nec dui nunc mattis enim ut. Dolor magna eget est lorem. Velit scelerisque in dictum non consectetur a erat nam at.",
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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Diam sit amet nisl suscipit adipiscing bibendum. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Cum sociis natoque penatibus et magnis dis parturient montes nascetur. Molestie nunc non blandit massa enim nec dui. In massa tempor nec feugiat nisl pretium. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Mus mauris vitae ultricies leo. Tellus mauris a diam maecenas sed enim ut sem. Bibendum enim facilisis gravida neque convallis a cras semper auctor. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Massa tincidunt nunc pulvinar sapien et. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Augue eget arcu dictum varius. Laoreet id donec ultrices tincidunt. Odio aenean sed adipiscing diam donec adipiscing tristique. Eleifend mi in nulla posuere sollicitudin.",
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
        description: "Duis ultricies lacus sed turpis tincidunt id. Orci sagittis eu volutpat odio facilisis mauris sit amet. Aenean pharetra magna ac placerat vestibulum lectus. Ac turpis egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis. Sed blandit libero volutpat sed. Quis viverra nibh cras pulvinar. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Quam lacus suspendisse faucibus interdum posuere. Enim ut sem viverra aliquet eget sit. Sociis natoque penatibus et magnis dis.",
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
        description: "Scelerisque purus semper eget duis at tellus at urna condimentum. Placerat duis ultricies lacus sed turpis tincidunt. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Dictum sit amet justo donec enim diam vulputate ut pharetra. Sit amet justo donec enim diam vulputate ut pharetra. Fermentum leo vel orci porta non. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Mollis nunc sed id semper risus in hendrerit. Pharetra vel turpis nunc eget lorem. Nibh mauris cursus mattis molestie. Eget mi proin sed libero enim sed. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Phasellus egestas tellus rutrum tellus pellentesque eu. Amet porttitor eget dolor morbi non arcu.",
        price: 1965
       },
       {
        ownerId: 1,
        address: '123 Lake1 Blvd',
        city: 'Lake Arrowhead',
        state: 'CA',
        country: 'United States',
        lat: 34.26,
        lng: -117.16,
        name: 'Oak Tree A-Frame',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 325
       },
       {
        ownerId: 1,
        address: '456 Joshua1 ave',
        city: 'Yucca Valley',
        state: 'CA',
        country: 'United States',
        lat: 34.11,
        lng: -116.43,
        name: 'Black Butterfly, Pool & Spa',
        description: 'Interdum varius sit amet mattis vulputate enim. Nunc sed velit dignissim sodales ut. Vitae nunc sed velit dignissim. In mollis nunc sed id semper risus. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. A scelerisque purus semper eget duis at tellus. Ut tortor pretium viverra suspendisse potenti nullam. Proin libero nunc consequat interdum varius sit amet. Quis eleifend quam adipiscing vitae proin sagittis nisl. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Turpis massa tincidunt dui ut ornare lectus sit amet est.',
        price: 495
       },
       {
        ownerId: 2,
        address: '789 big bear1 blvd',
        city: 'Big Bear',
        state: 'CA',
        country: 'United States',
        lat: 34.26,
        lng: -116.91,
        name: 'Luxury Retreat',
        description: "Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Senectus et netus et malesuada fames. Etiam non quam lacus suspendisse faucibus. Congue quisque egestas diam in. Ultricies mi quis hendrerit dolor. Maecenas sed enim ut sem viverra aliquet. Id interdum velit laoreet id donec. Sit amet justo donec enim diam vulputate ut pharetra sit. Lacus vestibulum sed arcu non odio euismod. Ac turpis egestas maecenas pharetra convallis posuere. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Convallis a cras semper auctor. At elementum eu facilisis sed odio morbi quis commodo odio. Non pulvinar neque laoreet suspendisse interdum consectetur libero. Aliquet lectus proin nibh nisl condimentum id venenatis. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Libero volutpat sed cras ornare arcu dui. Hac habitasse platea dictumst vestibulum rhoncus est. Non pulvinar neque laoreet suspendisse.",
        price: 199
       },
       {
        ownerId: 2,
        address: '1112 Rione1 street',
        city: 'Rome',
        state: 'Lazio',
        country: 'Italy',
        lat: 41.88,
        lng:12.47,
        name: 'Vibrant Updated Apartment',
        description: 'Urna porttitor rhoncus dolor purus non enim praesent elementum. Turpis in eu mi bibendum neque. Quam id leo in vitae turpis massa sed elementum. Mattis molestie a iaculis at erat. Ac ut consequat semper viverra. Nunc consequat interdum varius sit amet mattis vulputate enim. Enim diam vulputate ut pharetra sit amet aliquam id. Amet aliquam id diam maecenas ultricies. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Lectus urna duis convallis convallis. Risus nec feugiat in fermentum posuere.',
        price: 121
       },
       {
        ownerId: 2,
        address: '123 beverlyhill1 blvd',
        city: 'Beverly Hills',
        state: 'CA',
        country: 'United States',
        lat: 11,
        lng: 12,
        name: 'Beverly Hills Villa',
        description: "Orci sagittis eu volutpat odio facilisis mauris sit amet. Ut morbi tincidunt augue interdum velit euismod in. Tortor dignissim convallis aenean et tortor at risus viverra. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Non blandit massa enim nec dui. Turpis in eu mi bibendum neque egestas. Habitant morbi tristique senectus et netus. Integer enim neque volutpat ac tincidunt vitae semper quis. Amet mattis vulputate enim nulla aliquet. Lobortis scelerisque fermentum dui faucibus in ornare. Quis imperdiet massa tincidunt nunc pulvinar.",
        price: 588
       },
       {
        ownerId: 2,
        address: '456 oregon1 blvd',
        city: 'Dundee',
        state: 'OR',
        country: 'United States',
        lat: 13,
        lng: 6.91,
        name: 'Luxury Villa ',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem. Molestie nunc non blandit massa enim nec dui nunc mattis. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Amet mauris commodo quis imperdiet massa tincidunt. Eros donec ac odio tempor orci dapibus ultrices in. Vel pharetra vel turpis nunc eget. Massa placerat duis ultricies lacus sed turpis tincidunt id. Urna id volutpat lacus laoreet non curabitur gravida. Ante metus dictum at tempor commodo ullamcorper. Dignissim diam quis enim lobortis. Volutpat commodo sed egestas egestas fringilla phasellus. Habitant morbi tristique senectus et netus et malesuada. Dictum non consectetur a erat nam at. Nunc sed blandit libero volutpat. Non tellus orci ac auctor augue. Ornare lectus sit amet est placerat in egestas erat imperdiet. ",
        price: 889
       },
       {
        ownerId: 2,
        address: '789 sunset1 blvd',
        city: 'Los Angeles',
        state: 'CA',
        country: 'United States',
        lat: 4.26,
        lng: 16.91,
        name: 'Villa Blue',
        description: "Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Posuere morbi leo urna molestie at elementum eu facilisis. Enim nunc faucibus a pellentesque sit. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Et netus et malesuada fames ac turpis egestas maecenas. Orci ac auctor augue mauris. Auctor urna nunc id cursus metus aliquam eleifend mi. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Fermentum iaculis eu non diam phasellus. Urna molestie at elementum eu. Gravida in fermentum et sollicitudin ac. Praesent tristique magna sit amet purus gravida quis. Integer quis auctor elit sed vulputate mi. Feugiat vivamus at augue eget arcu dictum varius. Morbi quis commodo odio aenean sed. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Lectus quam id leo in vitae. Quis vel eros donec ac. Nulla pharetra diam sit amet nisl suscipit.",
        price: 1999
       },
       {
        ownerId: 2,
        address: '78 offroad1 jt road',
        city: 'joshua tree',
        state: 'CA',
        country: 'United States',
        lat: 18,
        lng: 91,
        name: 'in dreams 1963 airstream',
        description: "Integer enim neque volutpat ac tincidunt vitae semper. Lacinia quis vel eros donec ac odio. Vestibulum morbi blandit cursus risus at. Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis. Est velit egestas dui id ornare arcu odio. Sollicitudin aliquam ultrices sagittis orci. Bibendum neque egestas congue quisque egestas. Ultricies integer quis auctor elit sed vulputate mi. Augue eget arcu dictum varius duis at consectetur lorem donec. In metus vulputate eu scelerisque.",
        price: 558
       },
       {
        ownerId: 2,
        address: '7785 cali1 blvd',
        city: 'Pioneertown',
        state: 'CA',
        country: 'United States',
        lat: 36,
        lng: 71,
        name: 'Sol to Soul named by Condé Nast',
        description: "Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Enim diam vulputate ut pharetra sit amet aliquam id diam. Eget sit amet tellus cras adipiscing enim eu. Ullamcorper eget nulla facilisi etiam. Aliquam ut porttitor leo a diam. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Turpis egestas integer eget aliquet nibh praesent. Auctor augue mauris augue neque gravida in fermentum. Odio facilisis mauris sit amet massa. Egestas diam in arcu cursus euismod. Cras ornare arcu dui vivamus arcu. Sit amet tellus cras adipiscing enim eu. Fringilla ut morbi tincidunt augue interdum. Enim nec dui nunc mattis enim ut. Dolor magna eget est lorem. Velit scelerisque in dictum non consectetur a erat nam at.",
        price: 358
       },
       {
        ownerId: 2,
        address: '789 summit1 bear blvd',
        city: 'Yucca Valley',
        state: 'CA',
        country: 'United States',
        lat: 56,
        lng: 58,
        name: 'Summit House Joshua Tree',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Diam sit amet nisl suscipit adipiscing bibendum. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Cum sociis natoque penatibus et magnis dis parturient montes nascetur. Molestie nunc non blandit massa enim nec dui. In massa tempor nec feugiat nisl pretium. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Mus mauris vitae ultricies leo. Tellus mauris a diam maecenas sed enim ut sem. Bibendum enim facilisis gravida neque convallis a cras semper auctor. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Massa tincidunt nunc pulvinar sapien et. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Augue eget arcu dictum varius. Laoreet id donec ultrices tincidunt. Odio aenean sed adipiscing diam donec adipiscing tristique. Eleifend mi in nulla posuere sollicitudin.",
        price: 1450
       },
       {
        ownerId: 2,
        address: '5288 limon1 blvd',
        city: 'el limon',
        state: 'samana',
        country: 'Dominican Republic',
        lat: 86,
        lng: 61,
        name: 'Villa Arrecife Beach House',
        description: "Duis ultricies lacus sed turpis tincidunt id. Orci sagittis eu volutpat odio facilisis mauris sit amet. Aenean pharetra magna ac placerat vestibulum lectus. Ac turpis egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis. Sed blandit libero volutpat sed. Quis viverra nibh cras pulvinar. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Quam lacus suspendisse faucibus interdum posuere. Enim ut sem viverra aliquet eget sit. Sociis natoque penatibus et magnis dis.",
        price: 3000
       },
       {
        ownerId: 2,
        address: '789 san martin1 blvd',
        city: 'collectivitie de saint martin',
        state: 'terres basses',
        country: 'StMartin',
        lat: 17,
        lng: 18,
        name: 'Villa Mirabelle',
        description: "Scelerisque purus semper eget duis at tellus at urna condimentum. Placerat duis ultricies lacus sed turpis tincidunt. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Dictum sit amet justo donec enim diam vulputate ut pharetra. Sit amet justo donec enim diam vulputate ut pharetra. Fermentum leo vel orci porta non. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Mollis nunc sed id semper risus in hendrerit. Pharetra vel turpis nunc eget lorem. Nibh mauris cursus mattis molestie. Eget mi proin sed libero enim sed. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Phasellus egestas tellus rutrum tellus pellentesque eu. Amet porttitor eget dolor morbi non arcu.",
        price: 1965
       },
       {
        ownerId: 1,
        address: '123 Lake2 Blvd',
        city: 'Lake Arrowhead',
        state: 'CA',
        country: 'United States',
        lat: 34.26,
        lng: -117.16,
        name: 'Oak Tree A-Frame',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 325
       },
       {
        ownerId: 1,
        address: '456 Joshua2 ave',
        city: 'Yucca Valley',
        state: 'CA',
        country: 'United States',
        lat: 34.11,
        lng: -116.43,
        name: 'Black Butterfly, Pool & Spa',
        description: 'Interdum varius sit amet mattis vulputate enim. Nunc sed velit dignissim sodales ut. Vitae nunc sed velit dignissim. In mollis nunc sed id semper risus. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. A scelerisque purus semper eget duis at tellus. Ut tortor pretium viverra suspendisse potenti nullam. Proin libero nunc consequat interdum varius sit amet. Quis eleifend quam adipiscing vitae proin sagittis nisl. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Turpis massa tincidunt dui ut ornare lectus sit amet est.',
        price: 495
       },
       {
        ownerId: 2,
        address: '789 big bear2 blvd',
        city: 'Big Bear',
        state: 'CA',
        country: 'United States',
        lat: 34.26,
        lng: -116.91,
        name: 'Luxury Retreat',
        description: "Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Senectus et netus et malesuada fames. Etiam non quam lacus suspendisse faucibus. Congue quisque egestas diam in. Ultricies mi quis hendrerit dolor. Maecenas sed enim ut sem viverra aliquet. Id interdum velit laoreet id donec. Sit amet justo donec enim diam vulputate ut pharetra sit. Lacus vestibulum sed arcu non odio euismod. Ac turpis egestas maecenas pharetra convallis posuere. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Convallis a cras semper auctor. At elementum eu facilisis sed odio morbi quis commodo odio. Non pulvinar neque laoreet suspendisse interdum consectetur libero. Aliquet lectus proin nibh nisl condimentum id venenatis. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Libero volutpat sed cras ornare arcu dui. Hac habitasse platea dictumst vestibulum rhoncus est. Non pulvinar neque laoreet suspendisse.",
        price: 199
       },
       {
        ownerId: 2,
        address: '1112 Rione2 street',
        city: 'Rome',
        state: 'Lazio',
        country: 'Italy',
        lat: 41.88,
        lng:12.47,
        name: 'Vibrant Updated Apartment',
        description: 'Urna porttitor rhoncus dolor purus non enim praesent elementum. Turpis in eu mi bibendum neque. Quam id leo in vitae turpis massa sed elementum. Mattis molestie a iaculis at erat. Ac ut consequat semper viverra. Nunc consequat interdum varius sit amet mattis vulputate enim. Enim diam vulputate ut pharetra sit amet aliquam id. Amet aliquam id diam maecenas ultricies. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Lectus urna duis convallis convallis. Risus nec feugiat in fermentum posuere.',
        price: 121
       },
       {
        ownerId: 2,
        address: '123 beverlyhill2 blvd',
        city: 'Beverly Hills',
        state: 'CA',
        country: 'United States',
        lat: 11,
        lng: 12,
        name: 'Beverly Hills Villa',
        description: "Orci sagittis eu volutpat odio facilisis mauris sit amet. Ut morbi tincidunt augue interdum velit euismod in. Tortor dignissim convallis aenean et tortor at risus viverra. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Non blandit massa enim nec dui. Turpis in eu mi bibendum neque egestas. Habitant morbi tristique senectus et netus. Integer enim neque volutpat ac tincidunt vitae semper quis. Amet mattis vulputate enim nulla aliquet. Lobortis scelerisque fermentum dui faucibus in ornare. Quis imperdiet massa tincidunt nunc pulvinar.",
        price: 588
       },
       {
        ownerId: 2,
        address: '456 oregon2 blvd',
        city: 'Dundee',
        state: 'OR',
        country: 'United States',
        lat: 13,
        lng: 6.91,
        name: 'Luxury Villa ',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem. Molestie nunc non blandit massa enim nec dui nunc mattis. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Amet mauris commodo quis imperdiet massa tincidunt. Eros donec ac odio tempor orci dapibus ultrices in. Vel pharetra vel turpis nunc eget. Massa placerat duis ultricies lacus sed turpis tincidunt id. Urna id volutpat lacus laoreet non curabitur gravida. Ante metus dictum at tempor commodo ullamcorper. Dignissim diam quis enim lobortis. Volutpat commodo sed egestas egestas fringilla phasellus. Habitant morbi tristique senectus et netus et malesuada. Dictum non consectetur a erat nam at. Nunc sed blandit libero volutpat. Non tellus orci ac auctor augue. Ornare lectus sit amet est placerat in egestas erat imperdiet. ",
        price: 889
       },
       {
        ownerId: 2,
        address: '789 sunset2 blvd',
        city: 'Los Angeles',
        state: 'CA',
        country: 'United States',
        lat: 4.26,
        lng: 16.91,
        name: 'Villa Blue',
        description: "Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Posuere morbi leo urna molestie at elementum eu facilisis. Enim nunc faucibus a pellentesque sit. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Et netus et malesuada fames ac turpis egestas maecenas. Orci ac auctor augue mauris. Auctor urna nunc id cursus metus aliquam eleifend mi. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Fermentum iaculis eu non diam phasellus. Urna molestie at elementum eu. Gravida in fermentum et sollicitudin ac. Praesent tristique magna sit amet purus gravida quis. Integer quis auctor elit sed vulputate mi. Feugiat vivamus at augue eget arcu dictum varius. Morbi quis commodo odio aenean sed. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Lectus quam id leo in vitae. Quis vel eros donec ac. Nulla pharetra diam sit amet nisl suscipit.",
        price: 1999
       },
       {
        ownerId: 2,
        address: '78 offroad jt2 road',
        city: 'joshua tree',
        state: 'CA',
        country: 'United States',
        lat: 18,
        lng: 91,
        name: 'in dreams 1963 airstream',
        description: "Integer enim neque volutpat ac tincidunt vitae semper. Lacinia quis vel eros donec ac odio. Vestibulum morbi blandit cursus risus at. Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis. Est velit egestas dui id ornare arcu odio. Sollicitudin aliquam ultrices sagittis orci. Bibendum neque egestas congue quisque egestas. Ultricies integer quis auctor elit sed vulputate mi. Augue eget arcu dictum varius duis at consectetur lorem donec. In metus vulputate eu scelerisque.",
        price: 558
       },
       {
        ownerId: 2,
        address: '7785 cali2 blvd',
        city: 'Pioneertown',
        state: 'CA',
        country: 'United States',
        lat: 36,
        lng: 71,
        name: 'Sol to Soul named by Condé Nast',
        description: "Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Enim diam vulputate ut pharetra sit amet aliquam id diam. Eget sit amet tellus cras adipiscing enim eu. Ullamcorper eget nulla facilisi etiam. Aliquam ut porttitor leo a diam. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Turpis egestas integer eget aliquet nibh praesent. Auctor augue mauris augue neque gravida in fermentum. Odio facilisis mauris sit amet massa. Egestas diam in arcu cursus euismod. Cras ornare arcu dui vivamus arcu. Sit amet tellus cras adipiscing enim eu. Fringilla ut morbi tincidunt augue interdum. Enim nec dui nunc mattis enim ut. Dolor magna eget est lorem. Velit scelerisque in dictum non consectetur a erat nam at.",
        price: 358
       },
       {
        ownerId: 2,
        address: '789 summit bear2 blvd',
        city: 'Yucca Valley',
        state: 'CA',
        country: 'United States',
        lat: 56,
        lng: 58,
        name: 'Summit House Joshua Tree',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Diam sit amet nisl suscipit adipiscing bibendum. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Cum sociis natoque penatibus et magnis dis parturient montes nascetur. Molestie nunc non blandit massa enim nec dui. In massa tempor nec feugiat nisl pretium. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Mus mauris vitae ultricies leo. Tellus mauris a diam maecenas sed enim ut sem. Bibendum enim facilisis gravida neque convallis a cras semper auctor. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Massa tincidunt nunc pulvinar sapien et. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Augue eget arcu dictum varius. Laoreet id donec ultrices tincidunt. Odio aenean sed adipiscing diam donec adipiscing tristique. Eleifend mi in nulla posuere sollicitudin.",
        price: 1450
       },
       {
        ownerId: 2,
        address: '5288 limon2 blvd',
        city: 'el limon',
        state: 'samana',
        country: 'Dominican Republic',
        lat: 86,
        lng: 61,
        name: 'Villa Arrecife Beach House',
        description: "Duis ultricies lacus sed turpis tincidunt id. Orci sagittis eu volutpat odio facilisis mauris sit amet. Aenean pharetra magna ac placerat vestibulum lectus. Ac turpis egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis. Sed blandit libero volutpat sed. Quis viverra nibh cras pulvinar. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Quam lacus suspendisse faucibus interdum posuere. Enim ut sem viverra aliquet eget sit. Sociis natoque penatibus et magnis dis.",
        price: 3000
       },
       {
        ownerId: 2,
        address: '789 san martin2 blvd',
        city: 'collectivitie de saint martin',
        state: 'terres basses',
        country: 'StMartin',
        lat: 17,
        lng: 18,
        name: 'Villa Mirabelle',
        description: "Scelerisque purus semper eget duis at tellus at urna condimentum. Placerat duis ultricies lacus sed turpis tincidunt. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Dictum sit amet justo donec enim diam vulputate ut pharetra. Sit amet justo donec enim diam vulputate ut pharetra. Fermentum leo vel orci porta non. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Mollis nunc sed id semper risus in hendrerit. Pharetra vel turpis nunc eget lorem. Nibh mauris cursus mattis molestie. Eget mi proin sed libero enim sed. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Phasellus egestas tellus rutrum tellus pellentesque eu. Amet porttitor eget dolor morbi non arcu.",
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
