(function() {
	'use strict';
	angular.module('app')
	.controller('ViewCommunityController', ViewCommunityController);


	function ViewCommunityController(CommunityFactory) {
		var vm = this;

		CommunityFactory.getAllRecipes().then(function(res) {
			vm.recipes = res;
			console.log(res);
		});

		vm.deleteRecipe = function(recipe) {
		CommunityFactory.deleteRecipe(recipe._id).then(function() {
			vm.recipes.splice(vm.recipes.indexOf(recipe), 1);
			});
	};

	}
})();
