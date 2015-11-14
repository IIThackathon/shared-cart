var express 	= require('express');
var routes 		= require('./routes/route');
var bodyParser	= require('body-parser');
var app 		= express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',routes);
//create and start server
var port   = process.env.PORT || 3000;
var server = app.listen(port, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Job App listening at http://%s:%s', host, port);

});