var couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://127.0.0.1');
var bucket = cluster.openBucket('user');
var jwt = require('jsonwebtoken');

var user = {};
user.isLogin = function (login,callback) {
    if(login.userId && login.password){
        bucket.get(login.userId, function(err, result) {
            if(err)
                callback({message:"invalid user name"},null);
            else{
                //match
                if(result.value.password === login.password){
                    var token = jwt.sign(login, 'our super secret key');
                    callback(err,{"userName":result.value.userName,"token":token});
                }else{
                    callback({message:"invalid password"},null);
                }

            }
        });
    }
}

module.exports = user;