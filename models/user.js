"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.review, {as:'reviewAuthor', foreignKey: "authorId", });
      user.hasMany(models.review, {  foreignKey: "receiverId" });
      user.hasMany(models.image, { foreignKey: "userId" });
      user.hasMany(models.job, { foreignKey: "userId" });
      user.belongsToMany(models.job, {
        through: "applicants",
        as: "jobApplicants",
        foreignKey: "applicantId",
        onDelete: 'CASCADE',
        onUpdate:'CASCADE'
      });
      user.belongsToMany(models.role, {
        through: "userRoles",
        foreignKey: "userId",
      });
    }
  }
  user.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      isRecruiter: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      intro: { type: DataTypes.TEXT },
      profilePic: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:
          "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80",
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
