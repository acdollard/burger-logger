let Burger = require("../models/burger");

module.exports = function(app) {
    app.post("/api/burger", function(req, res){
        console.log(req.body)
    })
}