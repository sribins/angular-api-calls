var app = angular.module("myApp",[]);

app.controller("myController", ["$scope", "$resource",function($scope,$resource){
	$scope.message = "Hello World";
	$scope.getWeatherDetails = function(){
		$resource("http://jsonplaceholder.typicode.com/posts/1")
		.get(function(data){
			console.log(data)
		})
	}
}])