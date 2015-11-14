var couchbase = require('couchbase');
var config = require('config');
var couchbaseurl = config.get('app.couch_server.url');
var cluster = new couchbase.Cluster(couchbaseurl);
var bucket_name = config.get('app.item.bucket_name');
var bucket = cluster.openBucket(bucket_name);

var item = {};

item.create = function(itemsId,itemInput,callback){
    bucket.insert(itemsId, itemInput, function(err, res) {
        if(err){
            callback({message:"oops! could not create items!"},null);
        }else{
            callback(null,{itemsId:itemsId});
        }
    });
}
item.read = function(itemsId,callback){
    bucket.get(itemsId, function(err, res) {
        if(err){
            callback({message:"oops! could not find items!"},null);
        }else{
            callback(null,res.value);
        }
    });
}
item.update = function(itemsId,itemInput,callback){
    bucket.upsert(itemsId,itemInput, function (err,res) {
        if(err){
            callback({message:"oops! could not update items!"},null);
        }else{
            callback(null,{itemsId:itemsId});
        }
    });
}
item.delete = function(itemsId,callback){
    bucket.remove(itemsId,function(err,res){
        if(err){
            callback({message:"oops! could not delete items!"},null);
        }else{
            callback(null,{itemsId:itemsId});
        }
    })
}
module.exports = item;