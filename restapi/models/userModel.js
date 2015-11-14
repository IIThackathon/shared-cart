var couchbase = require('couchbase');
var config = require('config');
var couchbaseurl = config.get('app.couch_server.url');
var cluster = new couchbase.Cluster(couchbaseurl);
var bucket_name = config.get('app.user.bucket_name');
var bucket = cluster.openBucket(bucket_name);
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