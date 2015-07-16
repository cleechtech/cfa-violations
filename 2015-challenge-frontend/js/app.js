
var app = angular.module('census-tracts', [
	'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise("/");

	$stateProvider
	    .state('home', {
	      url: "/",
	      templateUrl: "templates/main.html",
	      controller: 'MainCtrl'
	    })
});

app.factory('Tracts', function($q){
	var dfd = $q.defer();

	d3.tsv('tracts.tsv', function(data){

		var tracts = [];

		// calculate the population and housing densities for each place 
		_.forEach(data, function(place){

			// add housing density (population per unit)
			var housingDensity = place['Population']/place['Housing Units'];

			var tract = {
				name:place['Name'],
				population: place['Population'],
				housingDensity: housingDensity
			};

			tracts.push(tract);
		});

		dfd.resolve(tracts);
	});

	return dfd.promise;
});

// d3.tsv('tracts.tsv', function(data){

// 	var tracts = [];

// 	// calculate the population and housing densities for each place 
// 	_.forEach(data, function(place){

// 		// add housing density (population per unit)
// 		var housingDensity = place['Population']/place['Housing Units'];

// 		var tract = {
// 			name:place['Name'],
// 			population: place['Population'],
// 			housingDensity: housingDensity
// 		};

// 		tracts.push(tract);
// 	});

// 	console.log(tracts);
// });
