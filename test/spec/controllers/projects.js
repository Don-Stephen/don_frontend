'use strict';

describe('Controller: ProjectsctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('donStephenApp'));

  var ProjectsctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectsctrlCtrl = $controller('ProjectsctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProjectsctrlCtrl.awesomeThings.length).toBe(3);
  });
});
