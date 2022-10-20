"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userRole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      userRole.belongsTo(models.user, { foreignKey: "userId" });
      userRole.belongsTo(models.role, { foreignKey: "roleId" });
    }
  }
  userRole.init(
    {
      yearsOfExperience: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "userRole",
    }
  );
  return userRole;
};
