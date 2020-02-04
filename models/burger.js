// Sequelize (capital) references the standard library
let Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
let sequelize = require("../config/connection.js");


let Burger = sequelize.define("burger", {
    name: Sequelize.STRING
})

Burger.sync();

module.exports = Burger;

