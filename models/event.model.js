const Sequelize = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Evnt = sequelize.define("event", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      name: {
        type: Sequelize.STRING
      },

      description: {
        type: Sequelize.STRING
      },

      url: {
        type: Sequelize.STRING
      },

      // Use Sequelize.DATE if errors arrise. (DATEONLY does not include time)
      start: {
        type: Sequelize.DATEONLY
      },

      end: {
          type: Sequelize.DATEONLY
      },

      author: {
          type:Sequelize.STRING
      },

      address: {
          type: Sequelize.STRING
      },

      active: {
        type: Sequelize.BOOLEAN,
        default: false
      }
    });
  
    return Evnt;
  };