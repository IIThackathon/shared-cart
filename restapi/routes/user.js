var User = require('../models/userModel');

var userRoute = function(route){
    route
        .post('/login',function(req,res){
            User.isLogin(req.body, function (err,result) {
                if(err){
                   res.status(500).send(err);
                }else{
                    res.status(200).send(result);
                }
            });
        })
}

module.exports = userRoute;