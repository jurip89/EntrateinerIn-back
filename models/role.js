"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      role.hasMany(models.job, { foreignKey: "categoryId" });
      role.belongsToMany(models.user, {
        through: "userRoles",
        foreignKey: "roleId",
        onDelete: 'CASCADE',
        onUpdate:'CASCADE'
      });
    }
  }
  role.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "role",
    }
  );
  return role;
};
