const Sequelize = require("sequelize");
const db = require("../db");

const Reminder = db.define("reminder", {
  title: {
    type: Sequelize.TEXT,
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Reminder;
