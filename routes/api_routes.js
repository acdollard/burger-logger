let Burger = require("../models/burger");

module.exports = function(app) {
    app.post("/api/burger", function(req, res){
        console.log(req.body)
        let new_burger = req.body

        Burger.create({
            name: new_burger.name
        });

        res.status(204).end();
    });


    app.get("/api/burger", function(req, res){
        
        Burger.findAll({}).then(function(results){
            console.log("results: " + results)
            res.send(results);
        })
    });
}