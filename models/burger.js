// // // Sequelize (capital) references the standard library
// const {Sequelize ,Datatypes} = require("sequelize");
// // // sequelize (lowercase) references our connection to the DB.
let sequelize = require("../config/connection.js");


// let Burger = sequelize.define("Burger", {
//     name: Sequelize.STRING,
//     isMunched: Sequelize.BOOLEAN
// })

// Burger.sync();

// module.exports = Burger;


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

