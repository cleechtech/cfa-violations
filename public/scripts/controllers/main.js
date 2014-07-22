'use strict';

app.controller('MainCtrl', function ($scope, $timeout) {
	// convert values to dates
	$timeout(function(){
		angular.forEach($scope.categories, function(data, category){
			data.earliest = new Date(data.earliest);
			data.latest = new Date(data.latest)
		})
	})

});
