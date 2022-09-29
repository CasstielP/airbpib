'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //one-to-many (user->review)
      Review.belongsTo(
        models.User,
        {foreignKey: 'userId'}
      )
      //many-to-many(user-review-spot)
      Review.belongsTo(models.User, {foreignKey: 'userId'})
      Review.belongsTo(models.Spot, {foreignKey: 'spotId'})
      //one-to-many(review-reviewImage)
      Review.hasMany(
        models.ReviewImage,
        {
          foreignKey: 'reviewId',
          onDelete: 'CASCADE',
          hooks: true
        }
      )
      Review.belongsTo(
        models.Spot,
        {
          foreignKey: 'spotId',
          // onDelete: 'CASCADE',
          // hooks: true
        }
      )
    }
  }
  Review.init({
    spotId: {
      type: DataTypes.INTEGER,
      allowNull: false

    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false

    },
    review: {
      type: DataTypes.STRING
    },
    stars: {
      type: DataTypes.FLOAT
    }
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
