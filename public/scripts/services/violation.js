'use strict';

app.service('Violation', function($http, $q){
  
  return {
    all: function(){
      return $http.get('/api/violations');
    },
    categories: function(){
      return $http.get('/api/violations/categories')
    },
    getCategory: function(category){
      return $http.get('/api/violations/' + category)
    }
  }

})