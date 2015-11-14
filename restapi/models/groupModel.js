var couchbase = require('couchbase');
var config = require('config');
var couchbaseurl = config.get('app.couch_server.url');
var cluster = new couchbase.Cluster(couchbaseurl);
var bucket_name = config.get('app.group.bucket_name');
var bucket = cluster.openBucket(bucket_name);
var uuid = require('node-uuid');


var group = {};

group.create = function(groupInput,callback){
    var groupId = uuid.v1();
    var itemsId = uuid.v1();
    groupInput.itemsId = itemsId;
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
