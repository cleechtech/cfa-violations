'use strict';

app.directive('lineChart', function(){
	
	return {
		restrict: 'A',
		scope: true,	// use child scope (prototypically inherits from parent)
		link: function (scope, elem, attrs){
			console.log(scope.value)	// id w/out whitespace

			// throws error
			Morris.Line({
				element: elem,
				xkey: scope.value.dates
			})

		}
	}
})

