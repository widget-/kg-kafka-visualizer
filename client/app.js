'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.viewer',
  'myApp.view2',
  'myApp.version',
  'ngMaterial',
  'ngAnimate'
]).
config(function($locationProvider, $stateProvider, $urlRouterProvider, $mdThemingProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');

    $stateProvider
        .state('viewer', {
          url: "/viewer",
          templateUrl: "viewer/viewer.html",
          controller: "Viewer",
          controllerAs: "vm"
        })
        .state('view2', {
          url: "/view2",
          templateUrl: "view2/view2.html"
        })

    $urlRouterProvider.otherwise("/viewer");

    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('red');
}).
run(function($rootScope) {
    $rootScope.$on('routeChangeSuccess', function(route) {
        console.log('changed to ',route);
    })
});
