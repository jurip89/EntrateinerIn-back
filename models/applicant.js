"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class applicant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      applicant.belongsTo(models.user, { foreignKey: "applicantId" });
      applicant.belongsTo(models.job, { foreignKey: "jobId" });
    }
  }
  applicant.init(
    {
      // applicantId: { type: DataTypes.INEGER },
      // jobId: { type: DataTypes.INEGER },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "pending",
      },
    },
    {
      sequelize,
      modelName: "applicant",
    }
  );
  return applicant;
};
