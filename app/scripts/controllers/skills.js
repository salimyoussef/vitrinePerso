'use strict';


angular.module('vitrinePersoApp')
  .controller('SkillsCtrl', function($scope, $http){
	$scope.skills = "";
	$http.get("../../assets/skills.json")
	.success(function(data){
		$scope.skills = data;
	})
	.error(function(error){
		console.log(error);
	});
});