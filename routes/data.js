var mysql= require('./mysql')
var ejs=require('ejs');
var session = require('express-session');
var object_id="vp_id";
exports.test=function(req,res){
    var get_items='SELECT * FROM coupon_list_test';
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
    var get_items='SELECT * FROM coupon_list_train';
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
    var get_items='SELECT * FROM coupon_detail_train limit 500';
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
exports.getCouponList = function(req,res){
    var user_id = req.body.userid;
   // console.log(user_id);
    var query1 = "SELECT purchased_coupons FROM recommendation where USER_ID_hash='" +user_id +"'";
    var query3 = "select genre_name, catalog_price, discount_price, valid_date,c_type from" +
        " (SELECT distinct cl.genre_name, cl.CATALOG_PRICE, cl.DISCOUNT_PRICE, DATE_FORMAT(cl.DISPEND,'%Y-%m-%d') as valid_date, 'Purchased' as c_type" +
        " FROM coupon_detail_train cd, coupon_list_train cl" +
        " where cd.USER_ID_hash='" +user_id +"' and cd.COUPON_ID_hash=cl.COUPON_ID_hash" +
        " union" +
        " SELECT distinct cl.genre_name, cl.CATALOG_PRICE, cl.DISCOUNT_PRICE, DATE_FORMAT(cl.DISPEND,'%Y-%m-%d') as valid_date, 'Visited' as c_type" +
        " FROM coupon_visit_train cv, coupon_list_train cl" +
        " where cv.USER_ID_hash='" +user_id +"' and cv.VIEW_COUPON_ID_hash=cl.COUPON_ID_hash)  tab";
    mysql.fetchData(query1, function(err,result) {
        if(err){
            console.log(err);
        }
        else {
            console.log("HI");
            var couponList = result[0].purchased_coupons.split(" ");
            var coupons = "";
            for(var i=0; i<couponList.length; i++) {
                (function(i) {
                    coupons += "'" +couponList[i] +"'";
                    if(i !== couponList.length-1) {
                        coupons += ",";
                    }
                })(i);
            }
            var query2 = "SELECT distinct cl.genre_name, cl.CATALOG_PRICE, cl.DISCOUNT_PRICE, DATE_FORMAT(cl.DISPEND,'%Y-%m-%d') as valid_date, 'Recommended' as c_type" +
                " FROM recommendation r, coupon_list_test cl" +
                " where r.USER_ID_hash='" +user_id +"' and cl.COUPON_ID_hash in (" +coupons +")";
            mysql.fetchData(query2, function(err,result1) {
                if(err){
                    console.log(err);
                }
                else {
                   // console.log(result);
                    mysql.fetchData(query3, function(err,result2) {
                        if(err){
                            console.log(err);
                        }
                        else {
                            var finalResult = result1.concat(result2);
                            console.log(finalResult);
                            res.send(finalResult);
                        }});
                }});
        }});
};