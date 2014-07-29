'use strict';

app.controller('MainCtrl', function ($scope, Violation) {

	Violation.all().then(function(res){
		$scope.allViolations = res.data
	})

	Violation.categories().then(function(res){
		$scope.categories = res.data
	})

});

// convert values to dates
// $timeout(function(){
// 	angular.forEach($rootScope.categories, function(data, category){
// 		data.earliest = new Date(data.earliest);
// 		data.latest = new Date(data.latest)
// 	})
// })

// utility formatting
// $scope.stripWhitespace = function(str){
// 	return str.replace(/[\s]/g, '').toLowerCase()
// }