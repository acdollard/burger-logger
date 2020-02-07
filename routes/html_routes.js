let path = require("path");
let db = require("../models");



module.exports = function(app){
    app.get("/", function(req, res) {
        db.Burger.findAll({}).then(function(data){
            console.log(data)
            let burgersObject = {burgers: data}
            // console.log(burgerObject);
            res.render("index", burgersObject)
        })
    });



}
