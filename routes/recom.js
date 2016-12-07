var mysql= require('./mysql')
var ejs=require('ejs');
var session = require('express-session');
var object_id="vp_id";
exports.getData=function(req,res){
     var get_items='SELECT * FROM coupon.recommendation';
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

exports.getMockGraphData=function(req,res){
	var data=[203,156,99,251,305,247];
	res.send({"status":"success","data":data});
}

exports.getCategoryCount = function(req,res){
    var query = "SELECT GENRE_NAME as category, count(*) as count FROM coupon.coupon_list_train group by GENRE_NAME";
    mysql.fetchData(query, function(err,result) {
        if(err){
            console.log(err);
        }
        else {
            res.send(result);
            console.log(result);
        }});
};

exports.getMonthlyCouponCount = function(req,res){
    var query = "SELECT DATE_FORMAT(I_DATE,'%M') as month, count(*) as count FROM coupon.coupon_detail_train where DATE_FORMAT(I_DATE,'%M') is not null group by month";
    mysql.fetchData(query, function(err,result) {
        if(err){
            console.log(err);
        }
        else {
            res.send(result);
            console.log(result);
        }});
};

exports.getWeekDayCouponCount = function(req,res){
    var query = 'select sum(CASE when USABLE_DATE_MON=1 then 1 else 0 end) as mon, sum(CASE when USABLE_DATE_TUE=1 then 1 else 0 end) as tue, sum(CASE when USABLE_DATE_WED=1 then 1 else 0 end) as wed, sum(CASE when USABLE_DATE_THU=1 then 1 else 0 end) as thu, sum(CASE when USABLE_DATE_FRI=1 then 1 else 0 end) as fri, sum(CASE when USABLE_DATE_SAT=1 then 1 else 0 end) as sat, sum(CASE when USABLE_DATE_SUN=1 then 1 else 0 end) as sun from coupon.coupon_list_train';
    mysql.fetchData(query, function(err,result) {
        if(err){
            console.log(err);
        }
        else {
            res.send(result);
            console.log(result);
        }});
};


exports.getCouponList = function(req,res){
	var user_id = req.params.userId;
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
                    console.log(result);
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

exports.checkLogin = function(req,res){
    // These two variables come from the form on
    // the views/login.hbs page
    var username = req.param("username");
    var password = req.param("password");
    var json_responses;
    if(username!=password)
    {
        json_responses = {"statusCode" : username, "statusCode2":password};
        res.send(json_responses)

    }
    else
    {
        json_responses = {"statusCode" : 401};
        res.send(json_responses);
    }
};

//Redirects to the homepage
exports.redirectToHomepage = function(req,res)
{
    res.redirect('/');

};
exports.logout = function(req,res)
{
    req.session.destroy();
    res.redirect('/');
};
