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
				HomeFactory.postRecipe(vm.recipe, $stateParams.id).then(function(res) {
        $state.go('ViewCommunity', {id:$stateParams.id});
      }, function(res) {
        vm.recipe = res;
      });
    };

		vm.goToViewCom = function(){
				$state.go('ViewCommunity', {id:$stateParams.id});
		};

		vm.colors = ['#f5f5f5','#b9f6ca','#ff80ab','#ffff8d', '#84ffff', '#80d8ff', '#448aff' ,'#b388ff', '#8c9eff', '#ff8a80'];

	}
})();
