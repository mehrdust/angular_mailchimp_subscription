(function() {
	'use strict';

	angular.module('mailchimpApp.routes')
		.config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {
	    $stateProvider
	        .state('mailchimpApp', {
	            url: '/',
	            views: {
	            	'content@': {
					    templateUrl: 'templates/static/home.tpl.html',
	        		},
	            	'sidebar': {
	            		templateUrl: 'templates/layout/sidebar.tpl.html',
					    controller: 'HeaderController as headerCtrl'
	            	}
	            }
	        })
	        .state('mailchimpApp.subscribe', {
	        	url: 'subscribe',
	        	views: {
            		'content@': {
			        	templateUrl: 'templates/subscription/subscribe.tpl.html',
			        	controller: 'SubscriptionController as subscribeCtrl'
		        	}
	        	}
	        })
		    .state('mailchimpApp.about', {
	            url: 'about',
	            views: {
            		'content@': {
			        	templateUrl: 'templates/static/about.tpl.html',
            		}
	            }
	        });
		$urlRouterProvider.otherwise('/');
	}
})();