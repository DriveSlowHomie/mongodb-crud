'use strict';
namespace app {
  angular.module('app', ['ui.router', 'ngResource', 'ui.bootstrap'])
    .config((
    $stateProvider: ng.ui.IStateProvider,
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

    $stateProvider.state('Home', {
      url: '/home',
      templateUrl: '/templates/home.html',
      controller: app.Controllers.HomeController,
      controllerAs: 'vm'
    }).state('AddMovie', {
      url: '/addMovie',
      templateUrl: '/templates/addMovie.html',
      controller: app.Controllers.AddMovieController,
      controllerAs: 'vm'
    }).state('UpdateMovie', {
      url: '/updateMovie/:id',
      templateUrl: '/templates/updateMovie.html',
      controller: app.Controllers.AddMovieController,
      controllerAs: 'vm'
    }).state('DeleteMovie', {
      url: '/deleteMovie/:id',
      templateUrl: '/templates/deleteMovie.html',
      controller: app.Controllers.DeleteMovieController,
      controllerAs: 'vm'
    }).state('Login', {
      url: '/',
      templateUrl: '/templates/login.html',
      controller: app.Controllers.LoginController,
      controllerAs: 'vm'
    });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });
}
