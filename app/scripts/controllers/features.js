'use strict';

/**
 * @ngdoc function
 * @name donStephenApp.controller:FeaturesCtrl
 * @description
 * # FeaturesCtrl
 * Controller of the donStephenApp
 */
angular.module('donStephenApp')
  .controller('FeaturesCtrl', function ($scope, ProjectsService, $routeParams) {
    var id = $routeParams.id;

    var init = function(){
      initScopeVariables();
      assignScopeVariables();
      resetCurrentFeature();
    }

    var initScopeVariables = function(){
      $scope.project = {};
      $scope.languages = [];
      $scope.languageSelected = {};
      $scope.isANewFeatureIncoming = true;

    }

    var assignScopeVariables = function(){
      ProjectsService.getProject(id).success(function(result) {
        console.log(result);
        $scope.project = result;
      });

      ProjectsService.getLanguages().success(function(result){
        $scope.languages = result;
        $scope.languageSelected = $scope.project.languages[0];
      });
    }

    var resetCurrentFeature = function(){
      $scope.feature = {
        description: '',
        finality: '',
        who: '',
        purpose: ''
      }
    }

    $scope.clickAddNewFeature = function(){
      console.log('NEW FEATURE!!!!!');
      $scope.isANewFeatureIncoming = true;
      resetCurrentFeature();
    }

    $scope.clickCancelCurrentFeature = function(){
      $scope.isANewFeatureIncoming = false;
      resetCurrentFeature();
    }



    init();
  });
