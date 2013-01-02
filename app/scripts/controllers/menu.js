'use strict';

constellationApp.controller('menuCtrl', function($scope, $location) {
  $scope.isItemActive = function (page) {
      var currentRoute = $location.path().substring(1) || 'home';
      return page === currentRoute;
  };
});
