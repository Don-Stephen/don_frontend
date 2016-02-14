'use strict';

/**
 * @ngdoc service
 * @name donStephenApp.AppService
 * @description
 * # AppService
 * Service in the donStephenApp.
 */
angular.module('donStephenApp')
  .service('AppService', function ($http, $injector, $location, $q, endpointUrl) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var _contentTypeJson = "application/json;charset=utf-8";
    var _contentTypeFormData = "application/x-www-form-urlencoded";
    var queuePromises = [];


    // Core HTTP request
    // All requests (GET, POST, OPTIONS, etc.) should call this method
    var http = function(method, endpoint, data, options) {
      var authorization = getAuthorization();
      var promiseName = getPromiseName(method, endpoint);

      var defer = $q.defer();
      var deferObj = {
        name: promiseName,
        defer: defer
      };

      _.extend(options, {
        method: method,
        url: endpointUrl,
        data: data,
        timeout: defer.promise,
        headers: {}
      });

      if (method.toLowerCase() === 'post' && data !== null && typeof(data) === 'string'){
        _.extend(options.headers, {
          'Content-Type': _contentTypeFormdata
        });
      }

      $http(options)
        .then(function(result){
        });
    };

  });
