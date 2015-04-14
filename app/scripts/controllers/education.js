'use strict';


angular.module('vitrinePersoApp')
  .controller('EdCtrl', function($scope, $http){
	$scope.education = "";
	$http.get("../../assets/education.json")
	.success(function(data){
		$scope.education = data;
	})
	.error(function(error){
		console.log(error);
	});
});