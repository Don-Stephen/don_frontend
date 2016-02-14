'use strict';

describe('Service: endpointUrl', function () {

  // load the service's module
  beforeEach(module('donStephenApp'));

  // instantiate service
  var endpointUrl;
  beforeEach(inject(function (_endpointUrl_) {
    endpointUrl = _endpointUrl_;
  }));

  it('should do something', function () {
    expect(!!endpointUrl).toBe(true);
  });

});
