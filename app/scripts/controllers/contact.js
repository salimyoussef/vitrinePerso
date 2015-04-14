'use strict';


angular.module('vitrinePersoApp')
  .controller('ContactCtrl', function($scope, $http){
	$scope.contact = "";
	$http.get("../../assets/contact.json")
	.success(function(data){
		$scope.contact = data;
	})
	.error(function(error){
		console.log(error);
	});
});