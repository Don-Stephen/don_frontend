'use strict';

/**
 * @ngdoc function
 * @name donStephenApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the donStephenApp
 */
angular.module('donStephenApp')
  .controller('ProjectsCtrl', function ($scope, Projects) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var init = function() {
      initScopeVariables();
      assignScopeVariables();
    }
    var initScopeVariables = function(){
      $scope.projectList = [];
    }
    var assignScopeVariables = function(){
      Projects.getProjects().then(function(result){
        console.log(result);
        if (result && result.data) {
          $scope.projectList = result.data;
        };
      });
    }
    init();
  });
