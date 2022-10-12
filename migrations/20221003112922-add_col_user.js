"use strict";

const { sequelize } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("users", "profilePic", {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue:
        "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80",
    });
    await queryInterface.addColumn("users", "intro", { type: Sequelize.TEXT });
    await queryInterface.addColumn("jobs", "lat", {
      type: Sequelize.FLOAT,
      allowNull: false,
    });
    await queryInterface.addColumn("jobs", "lng", {
      type: Sequelize.FLOAT,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("users", "profilePic");
    await queryInterface.removeColumn("users", "intro");
    await queryInterface.removeColumn("jobs", "lat");
    await queryInterface.removeColumn("jobs", "lng");
  },
};
