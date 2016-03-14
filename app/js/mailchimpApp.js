(function() {
	'use strict';

	angular.module('mailchimpApp', [
		'mailchimpApp.routes',
		'mailchimpApp.config',
		'mailchimpApp.layout',
		'mailchimpApp.subscription',
	]);

	angular.module('mailchimpApp.routes', ['ui.router']);
	angular.module('mailchimpApp.config', []);

	// angular.module('mailchimpApp').run(run);
	// run.$inject = [];
	// function run() {

	// }
})();