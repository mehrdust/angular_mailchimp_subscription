(function() {
	'use strict';

	angular.module('mailchimpApp.config')
		.constant('baseConfig', {
			api_url: 'https://us4.api.mailchimp.com/2.0/',
			api_key: '7b6b7220d75c52bbed85c4114e6755b7',
			api_id: '7c7be738af',
		})
		.config(config);
	config.$inject = ['$locationProvider'];

	function config($locationProvider) {
    	// $locationProvider.html5Mode(true);
	    // $locationProvider.hashPrefix('!');
	}
})();