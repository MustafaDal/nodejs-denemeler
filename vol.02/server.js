var express = require("express"),
    app = express();
    
    
//require("./router/main");

app.use(express.static('views'))


var server = app.listen("3000", function(){
    console.log("start on port " + server.address().port + " - " + Date.now());
});