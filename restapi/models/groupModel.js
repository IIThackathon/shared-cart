var couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://127.0.0.1');
var bucket = cluster.openBucket('group');
var uuid = require('node-uuid');

var group = {};

group.create = function(groupInput,callback){
    var groupId = uuid.v1();
    bucket.insert(groupId, groupInput, function(err, res) {
        if(err){
            callback({message:"oops! could not create group!"},null);
        }else{
            callback(null,{groupId:groupId});
        }
    });
}

group.read = function(groupId,callback){
    bucket.get(groupId, function(err, res) {
        if(err){
            callback({message:"oops! could not find group!"},null);
        }else{
            callback(null,res.value);
        }
    });
}
group.update = function(groupId,groupInput,callback){
    bucket.upsert(groupId,groupInput, function (err,res) {
        if(err){
            callback({message:"oops! could not update group!"},null);
        }else{
            callback(null,{groupId:groupId});
        }
    })
}

group.delete = function(groupId,callback){
    bucket.remove(groupId,function(err,res){
        if(err){
            callback({message:"oops! could not delete group!"},null);
        }else{
            callback(null,{groupId:groupId});
        }
    })
}

module.exports = group;
