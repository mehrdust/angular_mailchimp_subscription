(function() {
	'use strict';

	angular.module('mailchimpApp.layout.controllers')
		.controller('HeaderController', HeaderController);

	HeaderController.$inject = [];

	function HeaderController() {
		var vm = this;

		vm.sidebarCollapsed = true;

		vm.toggleSideBar = toggleSideBar;
		vm.collapseSideBar = collapseSideBar;

		function toggleSideBar() {
			vm.sidebarCollapsed = vm.sidebarCollapsed ? false : true;
		}
		function collapseSideBar() {
			vm.sidebarCollapsed = true;
		}
	}
})();