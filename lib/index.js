'use strict';

/**
 * Module dependencies.
 */

var request = require('request');

function Api(opt) {
	var self = this;	
	var baseUrl = "https://uproc.ui/v2";
	var options = opt || {};
	var apiKey = options.apiKey || "";

	return {
		
	};
};

/**
 * Export `AnyFile`.
 */

module.exports = Api;