'use strict';

/**
 * @ngdoc function
 * @name donStephenApp.controller:NewProjectCtrl
 * @description
 * # NewProjectCtrl
 * Controller of the donStephenApp
 */
angular.module('donStephenApp')
  .controller('NewProjectCtrl', function ($scope, ProjectsService) {
    
    var init = function(){
      initScopeVariables();
      assignScopeVariables();
    }

    var initScopeVariables = function() {
      $scope.languages = [];
      $scope.projectName = '';
      $scope.languageSelected = {};
    }

    var assignScopeVariables = function() {
      ProjectsService.getLanguages().success(function(result){
        $scope.languages = result;
      });
    }


    $scope.clickAddProject = function() {
      
      var languages = [];
      
      var maxLen = $scope.languages.length;
      for(var i = 0; i < maxLen; i++){
        languages[i] = $scope.languages[i].id;
      }
      var data = {
        name: $scope.projectName,
        languages: languages
      }
      console.log(data);
      ProjectsService.addProject(data).success(function(result){
        console.log('ok!', result.data);
      })
    }

    init();

  });
