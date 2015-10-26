(function() {
	'use strict';
	angular.module('app')
	.controller('AddRecipeController', AddRecipeController);

	function AddRecipeController(HomeFactory, $state) {
		var vm = this;
		vm.recipe = {};
    vm.recipe.ingredients = [];

    vm.createRecipe = function() {
      HomeFactory.postRecipe(vm.recipe).then(function(res) {
        $state.go('Home');
      }, function(res) {
        vm.recipe = res;
        vm.message = "Please include at least 1 ingredient.";
      });
    };


	}
})();
