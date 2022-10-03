'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jobLocation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      jobLocation.belongsTo(models.job,{foreignKey:'jobId'})
    }
  }
  jobLocation.init({
    lat: {type:DataTypes.INTEGER,allowNull:false},
    lon: {type:DataTypes.INTEGER,allowNull:false},
    
  }, {
    sequelize,
    modelName: 'jobLocation',
  });
  return jobLocation;
};