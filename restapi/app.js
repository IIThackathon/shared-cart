var express 	= require('express');
var routes 		= require('./routes/route');
var bodyParser	= require('body-parser');
var app 		= express();
var config = require('config');
var jwt = require('jsonwebtoken');
var secret_key = config.get('app.auth.secret_key');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(function (req, res, next) {
    if(req.originalUrl != '/login'){
        var token = req.get('token');
        if(token){
            try {
                var decoded = jwt.verify(token,secret_key);
                next();
            } catch(err) {
                res.status(401).send({"message":"authentication failed"});
            }
        }else{
            res.status(401).send({"message":"authentication failed"});
        }
    }else{
        next();
    }

});

app.use('/',routes);
//create and start server
var port   = process.env.PORT || 3000;
var server = app.listen(port, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Job App listening at http://%s:%s', host, port);

});