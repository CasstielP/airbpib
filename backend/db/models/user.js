'use strict';
const { Model, Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    toSafeObject() {
      const { id, username, email } = this; // context will be the User instance
      return { id, username, email };
    }
    static associate(models) {
      // define association here
      //one-to-many(user->review)
      User.hasMany(
        models.Review,
        {
          foreignKey:'userId',
          onDelete: 'CASCADE',
          hooks: true
        }
      )
      //many-to-many(user-booking-spot)
      // User.belongsToMany(
      //   models.Spot,
      //   {
      //     through: models.Booking,
      //     foreignKey: 'userId',
      //     otherKey: 'spotId'
      //   }
      // )
      // //many-to-many(user-review-spot)
      // User.belongsToMany(
      //   models.Spot,
      //   {
      //     through: models.Review,
      //     foreignKey: 'userId',
      //     otherKey: 'spotId'
      //   }
      // )
      //one-to-many (user-spot)
      User.hasMany(
        models.Spot,
        {
          foreignKey: 'ownerId',
          onDelete: 'cascade',
          hooks: true,
          as: 'Owner'
        }
      )
    }
    validatePassword(password) {
      return bcrypt.compareSync(password, this.hashedPassword.toString());
    }
    static getCurrentUserById(id) {
      return User.scope("currentUser").findByPk(id);
    }

    static async login({ credential, password }) {
      const { Op } = require('sequelize');
      const user = await User.scope('loginUser').findOne({
        where: {
          [Op.or]: {
            username: credential,
            email: credential
          }
        }
      });
      if (user && user.validatePassword(password)) {
        return await User.scope('currentUser').findByPk(user.id);
      }
    }

    // static async signup({ username, email, password }) {
    //   const hashedPassword = bcrypt.hashSync(password);
    //   const user = await User.create({
    //     username,
    //     email,
    //     hashedPassword
    //   });
    //   return await User.scope('currentUser').findByPk(user.id);
    // }

    static async signup({ firstName, lastName, username, email, password }) {
      const hashedPassword = bcrypt.hashSync(password);
      const user = await User.create({
        firstName,
        lastName,
        username,
        email,
        hashedPassword
      });
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4, 30],
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error("Cannot be an email.");
            }
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 256]
        }
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60]
        }
      }
    },
    {
      sequelize,
      modelName: "User",
      defaultScope: {
        attributes: {
          exclude: ["hashedPassword", "email", "createdAt", "updatedAt"]
        }
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ["hashedPassword"] }
        },
        loginUser: {
          attributes: {}
        }
      }
    }
  );
  return User;
};
