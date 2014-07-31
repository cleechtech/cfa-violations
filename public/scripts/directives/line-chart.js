'use strict';

// show amount of violations over the course of the year
app.directive('lineChart', function(){
	
	return {
		restrict: 'A',
		scope: {
			lineData: '=',
			lineXkey: '@',
			lineYkeys: '@',
			lineLabels: '@'
		},
		link: function (scope, elem, attrs){
			scope.$watch('lineData', function(){

				if(scope.lineData){					
					new Morris.Line({
						element: elem,
						data: scope.lineData,
						xkey: scope.lineXkey,
						ykeys: JSON.parse(scope.lineYkeys),
						labels: JSON.parse(scope.lineLabels)
					})
				}
			})
		}
	}
})

