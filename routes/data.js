var mysql= require('./mysql')
var ejs=require('ejs');
var session = require('express-session');
var object_id="vp_id";
exports.test=function(req,res){
    var get_items='SELECT * FROM coupon.coupon_list_test';
    //console.log(req.session.user);

    mysql.fetchData(get_items,function(err,result){
        if(err){
            console.log(err);

        }
        else{

            res.send(result);
            console.log(result);


        }});
};
exports.train=function(req,res){
    var get_items='SELECT * FROM coupon.coupon_list_train';
    //console.log(req.session.user);

    mysql.fetchData(get_items,function(err,result){
        if(err){
            console.log(err);

        }
        else{

            res.send(result);
            console.log(result);


        }});
};
exports.user_train=function(req,res){
    var get_items='SELECT * FROM coupon.coupon_detail_train limit 500';
    //console.log(req.session.user);

    mysql.fetchData(get_items,function(err,result){
        if(err){
            console.log(err);

        }
        else{

            res.send(result);
            console.log(result);


        }});
};
