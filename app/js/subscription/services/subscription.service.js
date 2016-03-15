(function() {
	'use strict';

	angular.module('mailchimpApp.subscription.services')
		.factory('Subscription', Subscription);

	Subscription.$inject = ['$http', 'baseConfig'];

	function Subscription($http, baseConfig) {
		var Subscription = {
			mailchimpSubscribe: mailchimpSubscribe,
		}

		return Subscription;

		function mailchimpSubscribe(FNAME, LNAME, EMAIL) {
			var actions,
				MailChimpSubscription,
				params = {},
				parameters,
				url;

			url = 'https://cors-anywhere.herokuapp.com/' + baseConfig.api_url + 'lists/subscribe';
			params.apikey = baseConfig.api_key;
			params.id = baseConfig.api_id;
			params.email = {
		        email: EMAIL
		    };
		    params.merge_vars = {
		        FNAME: FNAME,
		        LNAME: LNAME
		    };

	      	parameters = JSON.stringify(params);
	      	return $http.post(url, parameters);
		}
	}
})();
