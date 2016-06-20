'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'ngMaterial',
  'ngAnimate'
]).
config(function($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');

    $stateProvider
        .state('view1', {
          url: "/view1",
          templateUrl: "view1/view1.html"
        })
        .state('view2', {
          url: "/view2",
          templateUrl: "view2/view2.html"
        })

        $urlRouterProvider.otherwise("/view2");
}).
run(function($rootScope) {
    $rootScope.$on('routeChangeSuccess', function(route) {
        console.log('changed to ',route);
    })
});
