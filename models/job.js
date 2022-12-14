"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      job.belongsTo(models.user, { foreignKey: "userId" });
      job.belongsToMany(models.user, {
        through: "applicants",
        as: "applicantsJob",
        foreignKey: "jobId",
         onDelete: 'CASCADE',
        onUpdate:'CASCADE'
      });
      job.belongsTo(models.role, { foreignKey: "categoryId" });
    }
  }
  job.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: false },
      duration: { type: DataTypes.STRING, allowNull: false },
      paid: { type: DataTypes.BOOLEAN, allowNull: false },
      amount: { type: DataTypes.INTEGER, defaultValue:0 },
      location: { type: DataTypes.STRING, allowNull: false },
      lat: { type: DataTypes.FLOAT, allowNull: false },
      lng: { type: DataTypes.FLOAT, allowNull: false },
    },
    {
      sequelize,
      modelName: "job",
    }
  );
  return job;
};
