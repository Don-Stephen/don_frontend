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

      //
      // PROJECTS MODULE
      //
      .when('/projects', {
        templateUrl: 'views/projects/list.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects'
      })
      .when('/projects/new', {
        templateUrl: 'views/projects/new.html',
        controller: 'NewProjectCtrl',
        controllerAs: 'projects'
      })
      .when('/projects/:id/edit', {
        templateUrl: 'views/projects/edit.html',
        controller: 'FeaturesCtrl',
        controllerAs: 'features'
      })


      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  });
