(function() {
	'use strict';
	angular.module('app')
	.factory('CommunityFactory', CommunityFactory);


	function CommunityFactory($http, $q) {
		var o = {};

		o.addCommunity = function(com) {
			var q = $q.defer();
			$http.post('/api/community', com).then(function(res) {
				//console.log(res);
				q.resolve(res.data);
			});
			return q.promise;
		};


		o.getAllRecipes = function(id) {
			var q = $q.defer();
			$http.get('/api/recipe/' + id).then(function(res) {
				q.resolve(res.data);
			});
			return q.promise;
		};

		o.getOneRecipeToEdit = function(id) {
			console.log(id);
			var q = $q.defer();
			$http.get('/api/recipe/edit/' + id).then(function(res) {
				console.log(res);
				q.resolve(res.data);
				// console.log(res.data);

			});
			return q.promise;
		};

		o.updateRecipe = function(recipeObj) {
			console.log(recipeObj);

			var q = $q.defer();
			$http.put('/api/recipe', recipeObj).then(function (res) {
				q.resolve(res.data);
			});
			return q.promise;
		};

		o.deleteRecipe = function(id) {
			var q = $q.defer();
			$http.delete('/api/recipe/' + id).then(function(res) {
				q.resolve();
			});
			return q.promise;
		};


		return o;
	}
})();
