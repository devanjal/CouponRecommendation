/**
 * New node file
 */
var request = require('request')
, express = require('express')
,assert = require("assert")
,http = require("http");

describe('http tests', function(){

	it('Recommendation Data Generation', function(done){
		http.get('http://localhost:3000/show', function(res) {
			assert.equal(200, res.statusCode);
			done();
		})
	});
	it('Training Datasets', function(done){
		http.get('http://localhost:3000/train', function(res) {
			assert.equal(200, res.statusCode);
			done();
		})
	});
	it('Testing Datasets', function(done){
		http.get('http://localhost:3000/test', function(res) {
			assert.equal(200, res.statusCode);
			done();
		})
	});
	it('about us', function(done){
		http.get('http://localhost:3000/about', function(res) {
			assert.equal(200, res.statusCode);
			done();
		})
	});
	// it('user log return', function(done){
	// 	http.get('http://localhost:3000/test2', function(res) {
	// 		assert.equal(200, res.statusCode);
	// 		done();
	// 	})
	// });

});