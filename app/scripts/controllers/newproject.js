'use strict';

/**
 * @ngdoc function
 * @name donStephenApp.controller:NewProjectCtrl
 * @description
 * # NewProjectCtrl
 * Controller of the donStephenApp
 */
angular.module('donStephenApp')
  .controller('NewProjectCtrl', function ($scope, $timeout, ProjectsService) {

    var timeoutAnim = 1000;
    //
    // init scripts
    //

    var init = function(){
      initScopeVariables();
      assignScopeVariables();
    }

    var initScopeVariables = function() {
      $scope.languages = [];
      $scope.projectName = '';
      $scope.languageSelected = {};
      $scope.isSuccess = false;
      $scope.isLoading = false;
      $scope.isError = false;
      $scope.editUrl = null;
    }

    var assignScopeVariables = function() {
      ProjectsService.getLanguages().success(function(result){
        $scope.languages = result;
      });
    }

    //
    // public functions
    //

    $scope.clickAddProject = function() {
      $scope.isLoading = true;
      var languages = [];

      var maxLen = $scope.languages.length;
      for(var i = 0; i < maxLen; i++){
        languages[i] = $scope.languages[i].id;
      }
      var data = {
        name: $scope.projectName,
        languages: languages
      }
      // call service and post data
      ProjectsService.addProject(data).success(function(result){
        console.log('ok!', result);

        $scope.startButtonShown = true;
        $scope.editUrl = "projects/" + result.id + "/edit";
        $scope.isSuccess = true;
        $scope.isLoading = false;

      }).error(function(error){

        $scope.isLoading = false;
        $scope.isError = true;

      });
    }


    // initialize
    init();

  });
