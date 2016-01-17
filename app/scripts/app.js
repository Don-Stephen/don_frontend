'use strict';

/**
 * @ngdoc overview
 * @name donStephenApp
 * @description
 * # donStephenApp
 *
 * Main module of the application.
 */
angular
  .module('donStephenApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/old', {
        templateUrl: 'views/old.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
