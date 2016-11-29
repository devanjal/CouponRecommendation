var mysql= require('./mysql')
var ejs=require('ejs');
var session = require('express-session');
var object_id="vp_id";
exports.getData=function(req,res){
     var get_items='SELECT * FROM test';
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
