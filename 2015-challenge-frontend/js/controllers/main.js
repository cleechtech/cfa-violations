
app.controller('MainCtrl', function($scope, Tracts){

	Tracts.then(function(tracts){
		$scope.tracts = tracts;
	})
});