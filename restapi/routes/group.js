var Group = require('../models/groupModel');

var groupRoute = function(route){
    route
        .post('/group',function(req,res){
            Group.create(req.body,function(err,data){
                if(err){
                    res.status(500).send(err);
                }else{
                    res.status(200).send(data);
                }
            })
        })
        .get('/group/:groupId',function(req,res){
            Group.read(req.params.groupId,function(err,data){
                if(err){
                    res.status(500).send(err);
                }else{
                    res.status(200).send(data);
                }
            })
        })
        .put('/group/:groupId',function(req,res){
            Group.update(req.params.groupId,req.body,function(err,data){
                if(err){
                    res.status(500).send(err);
                }else{
                    res.status(200).send(data);
                }
            })
        })
        .delete('/group/:groupId',function(req,res){
            Group.delete(req.params.groupId,function(err,data){
                if(err){
                    res.status(500).send(err);
                }else{
                    res.status(200).send(data);
                }
            })
        })
}

module.exports = groupRoute;
