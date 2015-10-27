(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);
	function HomeFactory($http, $q) {
		var o = {};

		o.postRecipe = function(recipe) {
			var q = $q.defer();
			var i = 0;
			while(i < recipe.ingredients.length)
			{
				if(!recipe.ingredients[i]) {
					recipe.ingredients.splice(i, 1);
				}
				else {i++;}
			}
			if(recipe.ingredients.length < 1) {q.reject(recipe);}
			else {
				$http.post('/api/recipe', recipe).then(function(res) {
					q.resolve(res);
				});
			}
			return q.promise;
		};

		o.getAllCom = function() {
			var q = $q.defer();
			$http.get('/api/community').then(function(res) {
				//console.log(res)
				q.resolve(res.data);
			});
			return q.promise;
		};

return o;
	}
})();
