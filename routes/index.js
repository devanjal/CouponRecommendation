
/*
 * GET home page.
 */

exports.index = function(req, res){

  res.render('homepage', { title: 'Coupon Recommendation' });
};
exports.show = function(req, res){

  res.render('showData', { title: 'Coupon Recommendation' });
};
exports.getTest = function(req, res){

  res.render('getTest', { title: 'Coupon Recommendation' });
};
exports.getTrain = function(req, res){

  res.render('getTrain', { title: 'Coupon Recommendation' });
};
exports.user_train = function(req, res){

  res.render('user_train', { title: 'Coupon Recommendation' });
};
exports.about = function(req, res){

  res.render('about', { title: 'Coupon Recommendation' });
};
exports.index = function(req, res){

  res.render('homepage', { title: 'Coupon Recommendation' });
};
exports.show = function(req, res){

  res.render('showData', { title: 'Coupon Recommendation' });
};
exports.graphs = function(req, res){

  res.render('graphs', { title: 'Data Display' });
};