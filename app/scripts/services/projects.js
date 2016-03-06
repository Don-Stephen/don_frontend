'use strict';

/**
 * @ngdoc service
 * @name donStephenApp.ProjectsService
 * @description
 * # ProjectsService
 * Service in the donStephenApp.
 */
angular.module('donStephenApp')
  .service('ProjectsService', function (AppService, $http, endpointUrl) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getProjects = function(){
      return $http({
        method: 'GET',
        url: endpointUrl + 'projects/',
        headers: {}
      }).success(function(result){
        return result;
      });
    }

    this.getLanguages = function(){
      return $http({
        method: 'GET',
        url: endpointUrl + 'languageconfig/',
        headers: {}
      }).success(function(result){
        return result;
      }).error(function(error){
        console.log('error', error);
      });
    }

    this.addProject = function(data) {
      return $http({
        method: 'POST',
        url: endpointUrl + 'projects/',
        data: data
      }).success(function(result){
        console.log(result);
        return result;
      }).error(function(error){
        console.log('error ADD', error);
      });
    }

    this.getProject = function(id){
      return $http({
        method: 'GET',
        url: endpointUrl + 'projects/' + id + '/',
        headers: {}
      }).success(function(result){
        return result;
      })
    }

    console.log(this);


  });
