let Burger = require("../models/burger");

module.exports = function(app) {
    //put function
    app.post("/api/burger", function(req, res){
        console.log(req.body)
        let new_burger = req.body
        Burger.create({
            name: new_burger.name,
            isMunched: false
        });
        res.status(204).end();
    });


    //get function
    app.get("/api/burger", function(req, res){
        Burger.findAll({}).then(function(results){  
            return res.json(results);
        })
    });


    //update function
    app.put("/api/burger/:id", function(req, res){
        console.log(req.body);
        Burger.update({
            isMunched: true
        }, {
            where: {
                id: req.body.id
            }
        }).then(function(){          
            res.status(204).end()
        })
    })


    //delete function
    app.delete("/api/burger/:id", function(req, res) {
        Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function() {
            res.end();
        })
    })

}