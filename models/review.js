'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      review.belongsTo(models.user,{foreignKey:'authorId'})
      review.belongsTo(models.user,{foreignKey:'receiverId'})
    }
  }
  review.init({
    title: {type:DataTypes.STRING,allowNull:false},
    comment: {type:DataTypes.TEXT,allowNull:false},
    rating: {type:DataTypes.INTEGER,allowNull:false}
  }, {
    sequelize,
    modelName: 'review',
  });
  return review;
};