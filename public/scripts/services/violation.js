'use strict';

app.service('Violation', function($http, $q){
  
  return {
    all: function(){
      return $http.get('/api/violations');
    },
    categories: function(){
      var dfd = $q.defer()

      $http.get('/api/violations').then(function(response){
        var violations = response.data,
          categories = {};

        // extract categories and add metaData
        angular.forEach(violations, function(violation, index){
          if (categories.hasOwnProperty(violation.violation_category)){

            categories[violation.violation_category].dates.push(violation.violation_date);
            
          } else {
            // add data about the category to category key....
            categories[violation.violation_category] = { 
              count: 1,
              dates: [violation.violation_date],
              earliest: violation.violation_date,
              latest: violation.violation_date
            }
          }
        })
      
        dfd.resolve(categories)
      })
    return dfd.promise;

    },
    getCategory: function(category){
      return $http.get('/api/violations/' + category)
    }
  }

})