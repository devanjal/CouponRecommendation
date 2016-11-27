
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

