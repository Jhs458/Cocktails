(function() {
	'use strict';
	angular.module('app', ['ui.router', 'ngMaterial'])
	.config(Config);

	function Config($stateProvider, $urlRouterProvider, $httpProvider) {
		$stateProvider
		.state('Home',{
			url: '/',
			templateUrl: 'views/Home.html'
		})
		.state('AddRecipe',{
			url: '/addrecipe/:id',
			templateUrl: 'views/AddRecipe.html'
		})
		.state('EditRecipe',{
			url: '/editrecipe/:id',
			templateUrl: 'views/EditRecipe.html'
		})
		.state('AddCommunity',{
			url: '/addcommunity',
			templateUrl: 'views/AddCommunity.html'
		})
		.state('ViewCommunity',{
			url: '/viewcommunity/:id',
			templateUrl: 'views/ViewCommunity.html'
		})
		.state('RegLog',{
			url: '/reglog',
			templateUrl: 'views/RegLog.html'
		})
		.state('Profile',{
				url: '/profile/:id',
				templateUrl: 'views/profile.html',
		});
		$urlRouterProvider.otherwise('/');
		$httpProvider.interceptors.push('AuthInterceptor');

	}
})();
