
/*
 * GET home page.
 */

exports.index = function(req, res){

  res.render('homepage', { title: 'Coupon Recommendation' });
};
exports.show = function(req, res){

  res.render('showData', { title: 'Coupon Recommendation' });
};
exports.graphs = function(req, res){

  res.render('graphs', { title: 'Data Display' });
};
