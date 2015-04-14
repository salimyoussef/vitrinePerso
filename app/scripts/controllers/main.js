'use strict';

/**
 * @ngdoc function
 * @name vitrinePersoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vitrinePersoApp
 */
angular.module('vitrinePersoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.intro1 = "Bonjour ! Mon nom est Youssef SALIM.";
    $scope.intro2 = "Ce site-vitrine a pour but de vous présenter mon parcours académique, de même que les projets que j'ai menés jusqu'à ce jour.";
  });