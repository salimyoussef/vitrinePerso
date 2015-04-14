'use strict';

/**
 * @ngdoc overview
 * @name vitrinePersoApp
 * @description
 * # vitrinePersoApp
 *
 * Main module of the application.
 */
angular
  .module('vitrinePersoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/education', {
        templateUrl: 'views/formation.html',
        controller : 'EdCtrl'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller : 'ProjectsCtrl'
      })
      .when('/skills', {
        templateUrl: 'views/skills.html',
        controller : 'SkillsCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller : 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
