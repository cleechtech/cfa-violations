'use strict';

app.directive('lineChart', function(Violation){
	
	return {
		restrict: 'A',
		scope: true,	// use child scope (prototypically inherits from parent)
		link: function (scope, elem, attrs){

			Violation.getCategory(attrs.id).then(function(data){
				// all data that matches the category
				var violations = data.data;
				
				console.log(violations)
















				new Morris.Bar({
					element: elem,
					data: violations,
					xkey: 'violation_date',
					ykey: 'inspection_id',
					labels: ['date', 'inspection id']
				})

			})
		}
	}
})

