'use strict';

describe('Service: Projects', function () {

  // load the service's module
  beforeEach(module('donStephenApp'));

  // instantiate service
  var Projects;
  beforeEach(inject(function (_Projects_) {
    Projects = _Projects_;
  }));

  it('should do something', function () {
    expect(!!Projects).toBe(true);
  });

});
