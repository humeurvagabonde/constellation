'use strict';

angular.module('constellationServices', ['ngResource'])
	.factory('Contact', function($resource) {
			// Service logic
			return $resource('data/contacts/:contactId.json', {}, {
				query: {method:'GET', params:{contactId:'contacts'}, isArray:true}
			});
	})
	.factory('ContactLabel', function($resource) {
			// Service logic
			return $resource('data/contacts/:contactTagId.json', {}, {
				query: {method:'GET', params:{contactTagId:'contactTags'}, isArray:true}
			});
	});
