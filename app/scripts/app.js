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
  .config(function ($routeProvider, $locationProvider) {
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
      .when('/projects', {
        templateUrl: 'views/projects/list.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects'
      })
      .when('/projects/new', {
        templateUrl: 'views/projects/new.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  });
