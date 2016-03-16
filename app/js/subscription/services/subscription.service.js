(function() {
	'use strict';

	angular.module('mailchimpApp.subscription.services')
		.factory('Subscription', Subscription);

	Subscription.$inject = [];

	function Subscription() {
		var Subscription = {
			mailchimpSubscribe: mailchimpSubscribe,
		}

		return Subscription;

		function mailchimpSubscribe(mailchimp) {

		}
	}
})();