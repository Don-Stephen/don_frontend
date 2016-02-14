'use strict';

describe('Service: AppService', function () {

  // load the service's module
  beforeEach(module('donStephenApp'));

  // instantiate service
  var AppService;
  beforeEach(inject(function (_AppService_) {
    AppService = _AppService_;
  }));

  it('should do something', function () {
    expect(!!AppService).toBe(true);
  });

});
