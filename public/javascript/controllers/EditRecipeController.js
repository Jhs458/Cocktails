(function() {
	'use strict';
	angular.module('app')
	.controller('EditRecipeController', EditRecipeController);


	function EditRecipeController(CommunityFactory, $stateParams, $state) {
		var vm = this;
		vm.editRecipe = {};
		vm.editRecipe.ingredients = [];

		if($stateParams.id){
				CommunityFactory.getOneRecipeToEdit($stateParams.id).then(function(res) {
					vm.editRecipe = res;
				});
		}

		vm.updateRecipe = function(edittedRecipe) {
			console.log(edittedRecipe);
			CommunityFactory.updateRecipe({recipeEditted: edittedRecipe}).then(function(res) {
				$state.go('ViewCommunity', {id: edittedRecipe.community}, {location: true});
			});
		};

		vm.goToViewComFromEdit = function(x){
					$state.go('ViewCommunity', {id: x.community}, {location: true});
			};
		

	}
})();
