(function() {
	'use strict';
	angular.module('mailchimpApp.subscription.controllers')
		.controller('SubscriptionController', SubscriptionController);

		SubscriptionController.$inject = ['Subscription', 'baseConfig'];

		function SubscriptionController(Subscription, baseConfig) {
			var vm = this;

			// Model
			vm.firstName = '';
			vm.lastName = '';
			vm.email = '';
			vm.submitResult = {};
			// vm.submitResult.failed = false;

			vm.subscribed = false;
			vm.submitForm = submitForm;

			function submitForm() {
				Subscription.mailchimpSubscribe(vm.firstName, vm.lastName, vm.email)
					.success(function(data) {
		      			vm.submitResult.failed = false;
		      			vm.subscribed = true;
			    	})
		      		.error(function(data) {
		      			vm.submitResult.failed = true;
		      			vm.submitResult.error = data.error;
			      	}
		      	);
			}
		}
})();