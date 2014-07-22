'use strict';

app.factory('Violation', function($rootScope, $http){
  // get all violations
  $http.get('/api/violations').then(function(response){
    var violations = response.data,
      categories = {};

    $rootScope.violations = violations;

    // extract categories
    angular.forEach(violations, function(violation, index){
      if (categories.hasOwnProperty(violation.violation_category)){

      	categories[violation.violation_category].count += 1;
      	categories[violation.violation_category].dates.push(violation.violation_date);
      	
      	if (categories[violation.violation_category].earliest > violation.violation_date){
      		// find earliest
      		categories[violation.violation_category].earliest = violation.violation_date;
      	}

      	if (categories[violation.violation_category].latest < violation.violation_date){
      		// find latest
      		categories[violation.violation_category].latest = violation.violation_date;
      	}
      	
      
      } else {
        categories[violation.violation_category] = { 
        	count: 1,
        	dates: [violation.violation_date],
        	earliest: violation.violation_date,
        	latest: violation.violation_date
        }
      }
    })

    $rootScope.categories = categories;
  })


})