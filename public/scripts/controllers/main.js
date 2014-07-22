'use strict';

app.controller('MainCtrl', function ($scope, $http) {
	$http.get('/api/violations').then(function(response){
		$scope.violations = response.data
	})

});
