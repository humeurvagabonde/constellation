'use strict';
//FLA : essayer de creer d'autres modules (un par fonctionnalités) qui encapsule les routes.

var constellationApp = angular.module('constellationApp', ['constellationServices', 'ui'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/contacts', {
        templateUrl: 'views/contacts.html',
        controller: 'ContactsCtrl'
      })
			.when('/contacts/:contactId', {
				templateUrl: 'views/contact-detail.html', 
				controller: 'ContactDetailCtrl'
			})
      .when('/stats', {
        templateUrl: 'views/stats.html',
        controller: 'StatsCtrl'
      })
      .when('/config', {
        templateUrl: 'views/config.html',
        controller: 'ConfigCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
/*
constellationApp.filter('labelsFilter', function() {
    return function(element, labels) {
      var accept = false;
      for (var idx = 0; idx < labels.length; idx++) {
				var label = labels[idx]
        accept = search(element, label);
				if (accept) {
					break;
				}
      }
      return accept;
    }
		// helper function
		var search = function(obj, text){
      if (text.charAt(0) === '!') {
        return !search(obj, text.substr(1));
      }
      switch (typeof obj) {
        case "boolean":
        case "number":
        case "string":
          return ('' + obj).toLowerCase().indexOf(text) > -1;
        case "object":
          for ( var objKey in obj) {
            if (objKey.charAt(0) !== '$' && search(obj[objKey], text)) {
              return true;
            }
          }
          return false;
        case "array":
          for ( var i = 0; i < obj.length; i++) {
            if (search(obj[i], text)) {
              return true;
            }
          }
          return false;
        default:
          return false;
      }
    };
  });
*/

constellationApp.value('ui.config', {
   // The ui-jq directive namespace
   jq: {
      // The Tooltip namespace
      tooltip: {
         // Tooltip options. This object will be used as the defaults
         placement: 'right'
      },

			popover: {
				animation: true,
				placement: 'right',
				title: 'yeah'
			}
   }
});




