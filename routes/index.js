
/*
 * GET home page.
 */

exports.index = function(req, res){

  res.render('homepage', { title: 'Coupon Recommendation' });
};
exports.show = function(req, res){

  res.render('bid_log', { title: 'Coupon Recommendation' });
};