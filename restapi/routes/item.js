var Item = require('../models/itemModel');

var itemRoute = function(route){
    route
        .post('/item/:itemsId',function(req,res){
            Item.create(req.params.itemsId,req.body, function (err,result) {
                if(err){
                    res.status(500).send(err);
                }else{
                    res.status(200).send(result);
                }
            });
        })
        .get('/item/:itemsId',function(req,res){
            Item.read(req.params.itemsId,function(err,data){
                if(err){
                    res.status(500).send(err);
                }else{
                    res.status(200).send(data);
                }
            })
        })
        .put('/item/:itemsId',function(req,res){
            Item.update(req.params.itemsId,req.body,function(err,data){
                if(err){
                    res.status(500).send(err);
                }else{
                    res.status(200).send(data);
                }
            })
        })
        .delete('/item/:itemsId',function(req,res){
            Item.delete(req.params.itemsId,function(err,data){
                if(err){
                    res.status(500).send(err);
                }else{
                    res.status(200).send(data);
                }
            })
        })
}

module.exports = itemRoute;