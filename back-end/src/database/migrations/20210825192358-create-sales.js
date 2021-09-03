"use strict";

const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("sales", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      seller_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
     total_price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2),
      },
      delivery_address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      delivery_number: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      sale_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("sales");
  },
};
