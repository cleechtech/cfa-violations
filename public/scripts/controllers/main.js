'use strict';

app.controller('MainCtrl', function ($scope, Violation) {

	Violation.all().then(function(res){
		$scope.allViolations = res.data
	})

	Violation.categories().then(function(res){
		$scope.categories = res.data
	})

	Violation.groupedByMonth().then(function(res){
		$scope.groupedByMonth = res.data
	})

	$scope.showCategory = function(category){
		Violation.getCategory(category).then(function(data){
			$scope.current = data.data
		})
	}

})