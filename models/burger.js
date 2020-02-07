
let sequelize = require("../config/connection.js");

module.exports = function(sequelize, Datatypes){
    let Burger = sequelize.define("Burger", {
        name: {
            type: Datatypes.STRING,
            allowNull: false, 
            validate: {
                len:[1,100]
            }
        },
        isMunched: {
            type: Datatypes.BOOLEAN,
            allowNull: false
        }
    })
    return Burger;
}

