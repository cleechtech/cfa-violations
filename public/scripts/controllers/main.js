'use strict';

app.controller('MainCtrl', function ($scope, Violation) {

	Violation.all().then(function(res){
		$scope.allViolations = res.data
	})

	Violation.categories().then(function(res){
		$scope.categories = res.data
	})

})