'use strict';

angular.module('myApp.viewer', [])

.controller('Viewer', function($mdSidenav) {
	var vm = this;

	vm.showLeftSidenav = function() {
		$mdSidenav('sidenav').open();
	}
});
