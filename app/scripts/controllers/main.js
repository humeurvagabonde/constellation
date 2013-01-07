'use strict';

constellationApp.controller('MainCtrl', function($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Testacular',
    'Bootstrap',
    'yeoman'
  ];

  // a supprimer (ou rajouter $location, $oroute en injection
  /*
  var activePath = null;
  $scope.$on('$routeChangeSuccess', function(){
    activePath = $location.path();
  });
  $scope.isActive = function( pattern ) {
    return (new RegExp( pattern )).test( activePath );
  };
  */
});
