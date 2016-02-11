var express = require("express"),
    nunjucks = require("nunjucks"),
    path = require( "path" ),
    app = express(),
    nunjucksEnv = new nunjucks.Environment( new nunjucks.FileSystemLoader( path.join( __dirname, '/public' )));
    
nunjucksEnv.express( app );

app.get("/", function(req, res){
    res.render('index.html', { username: "test" })    
});


app.listen(3000);

console.log('Server runing at 3000');