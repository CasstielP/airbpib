'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //many-to-many(user-booking-spot)
      // Spot.belongsToMany(
      //   models.User,
      //   {
      //     through: models.Booking,
      //     foreignKey: 'spotId',
      //     otherKey: 'userId'
      //   }
      // )
      // //many-to-many(user-review-spot)
      // Spot.belongsToMany(
      //   models.User,
      //   {
      //     through: models.Review,
      //     foreignKey: 'spotId',
      //     otherKey: 'userId'
      //   }
      // )
      //one-to-many(user-spot)
      Spot.belongsTo(
        models.User,
        {foreignKey: 'ownerId'}
      )
      //one-to-many(spot-spotImage)
      Spot.hasMany(
        models.SpotImage,
        {
          foreignKey: 'spotId',
          onDelete: 'CASCADE',
          hooks: true
        }
      )
      Spot.hasMany(
        models.Review,
        {
          foreignKey: 'spotId',
          onDelete: 'CASCADE',
          hooks: true
        }
      )
    }
  }
  Spot.init({
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lat: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    lng: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Spot',
    // indexes: [{
    //   unique: true,
    //   fields: ['address','city', 'state', 'country']
    // }]
  });
  return Spot;
};
