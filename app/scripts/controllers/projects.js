'use strict';


angular.module('vitrinePersoApp')
  .controller('ProjectsCtrl', function($scope, $http){
	$scope.projects = "";
	$http.get("../../assets/projects.json")
	.success(function(data){
		$scope.projects = data;
	})
	.error(function(error){
		console.log(error);
	});
});