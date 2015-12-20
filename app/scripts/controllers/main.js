'use strict';

/**
 * @ngdoc function
 * @name donStephenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the donStephenApp
 */
angular.module('donStephenApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    console.log('???');
    particlesJS.load('particles', 'images/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  });
