angular.module('App', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: '/templates/main.html',
        controller: 'ListController'
      })
      .state('add', {
        url: '/add',
        templateUrl: '/templates/add.html',
        controller: 'AddController'
      })
      .state('show', {
        url: '/show/:id',
        templateUrl: '/templates/show.html',
        controller: 'ShowController'
      })
      .state('edit', {
        url: '/edit/:id',
        templateUrl: '/templates/edit.html',
        controller: 'EditController'
      })
  })