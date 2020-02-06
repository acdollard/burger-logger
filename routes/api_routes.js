let Burger = require("../models/burger");

module.exports = function(app) {
    app.post("/api/burger", function(req, res){
        console.log(req.body)
        let new_burger = req.body

        Burger.create({
            name: new_burger.name,
            isMunched: false
        });

        res.status(204).end();
    });


    app.get("/api/burger", function(req, res){
        
        Burger.findAll({}).then(function(results){
           
            return res.json(results);
        })
    });


    app.put("/api/burger:id", function(req, res){
        console.log(req.body);
        Burger.update({
            isMunched: true
        }, {
            where: {
                id: req.body.id
            }
        }).then(function(response){
            res.json(response);
        })
    })


    //update function



    //delete function
}