(function() {
	'use strict';

	angular.module('mailchimpApp.subscription', [
		'mailchimpApp.subscription.controllers',
		'mailchimpApp.subscription.services',
	]);

	angular.module('mailchimpApp.subscription.controllers', ['ngMessages']);
	angular.module('mailchimpApp.subscription.services', []);
})();