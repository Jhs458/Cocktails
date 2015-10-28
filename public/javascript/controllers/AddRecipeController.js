(function() {
	'use strict';
	angular.module('app')
	.controller('AddRecipeController', AddRecipeController);

	function AddRecipeController(HomeFactory, $state, $stateParams) {
		var vm = this;
		vm.recipe = {};
    vm.recipe.ingredients = [];
		// vm.recipe.community = {};

    vm.createRecipe = function() {
      // HomeFactory.postRecipe(vm.recipe).then(function(res) {
				HomeFactory.postRecipe(vm.recipe, $stateParams.id).then(function(res) {
				//populate community object in recipe schema
				// vm.recipe.community.push(x)
				// console.log($stateParams.id)
        $state.go('ViewCommunity', {id:$stateParams.id});
      }, function(res) {
        vm.recipe = res;
      });
    };

		vm.goToViewCom = function(){
				$state.go('ViewCommunity', {id:$stateParams.id});
		};

	}
})();
