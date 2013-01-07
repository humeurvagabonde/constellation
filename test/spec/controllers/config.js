'use strict';

describe('Controller: ConfigCtrl', function() {

  // load the controller's module
  beforeEach(module('constellationApp'));

  var ConfigCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    ConfigCtrl = $controller('ConfigCtrl', {
      $scope: scope
    });
  }));

  //it('should attach a list of awesomeThings to the scope', function() {
    //expect(scope.awesomeThings.length).toBe(3);
  //});
});
