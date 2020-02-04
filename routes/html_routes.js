let path = require("path");

module.exports = function(app){
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });


    //when the js file is called FROM the index.html file, send the path from THIS routes file
    app.get("/js/index.js", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/js/index.js"))
    });
    
    app.get("/css/style.css", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/css/style.css"))
    });

    app.get("/css/assets/burger_image.jpg", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/css/assets/burger_image.jpg"))
    });


}
