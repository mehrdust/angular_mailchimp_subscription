(function() {
	'use strict';
	angular.module('mailchimpApp.subscription.controllers')
		.controller('SubscriptionController', SubscriptionController);

		SubscriptionController.$inject = [];

		function SubscriptionController() {
			var vm = this;


			vm.formSubmitted = false;
			vm.submitForm = submitForm;

			function submitForm() {
				console.log('test');
			}
		}
})();