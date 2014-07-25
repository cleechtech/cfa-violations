'use strict';

app.directive('lineChart', function(){
	return {
		restrict: 'A',
		link: function(scope, elem, attrs){
			// pass data to this directive
			// Morris.Line({
			// 	element: elem.html()

			// })
		}
	}
})