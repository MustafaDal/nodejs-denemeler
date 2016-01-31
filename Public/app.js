/*var express = require('express'),
    app = express.createServer();
 
    
app.get('/', function(req, res){
   res.sen('Express deneme'); 
});

app.listen(process.env.PORT || 8080);
*/

app.listen('8080', '0.0.0.0', function(){
    console.log('Listening to port: ' + 8080);
});
/*
exports.index = function(req, res){
    res.render('index', {title: 'Express'});
}*/