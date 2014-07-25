'use strict';

app.controller('MainCtrl', function ($scope, Violation) {

	Violation.all().then(function(data){
		$scope.allViolations = data
	})

	Violation.categories().then(function(data){
		$scope.categories = Object.keys(data);	// just category names

	})


});

// convert values to dates
// $timeout(function(){
// 	angular.forEach($rootScope.categories, function(data, category){
// 		data.earliest = new Date(data.earliest);
// 		data.latest = new Date(data.latest)
// 	})
// })