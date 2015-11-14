var couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://127.0.0.1');
var bucket = cluster.openBucket('item');

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