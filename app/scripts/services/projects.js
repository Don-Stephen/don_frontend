'use strict';

/**
 * @ngdoc service
 * @name donStephenApp.Projects
 * @description
 * # Projects
 * Service in the donStephenApp.
 */
angular.module('donStephenApp')
  .service('Projects', function (AppService, $http, endpointUrl) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getProjects = function(){
      $http({
        method: 'GET',
        url: endpointUrl + 'projects/',
        headers: {}
      }).then(function(result){
        return result;
      });
    }

  });
