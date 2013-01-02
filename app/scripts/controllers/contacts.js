'use strict';

constellationApp.controller('ContactsCtrl', function($scope, Contact, ContactLabel) {

  $scope.labels = ContactLabel.query();
  $scope.contacts = Contact.query();
  var localQuery = $scope.query = '';
  $scope.selectedLabels = [];

	$scope.selectLabel = function( label ) {
		label.selected = !label.selected;
		if (label.selected) {
			$scope.selectedLabels.push(label.name);
		} else {
			var selectedLabelsBackup = $scope.selectedLabels;
			$scope.selectedLabels = [];
			angular.forEach(selectedLabelsBackup, function(value, key){
				if (value != label.name) {
					this.push(value);
				}
			}, $scope.selectedLabels);
		}
		
		function includes(array, obj) {
  		return array.indexOf(obj) != -1;
		}
  }

	$scope.labelsFilter = function (contact) {
		
		return contact.name.toLowerCase().indexOf($scope.query) > -1;
	}

});
