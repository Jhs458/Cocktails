(function() {
	'use strict';
	angular.module('app')
	.controller('ViewCommunityController', ViewCommunityController);


	function ViewCommunityController(CommunityFactory, $stateParams, $state) {
		var vm = this;

		CommunityFactory.getAllRecipes().then(function(res) {
			// if($stateParams.id == res[i].community){
			vm.recipes = res;
	// 	}
		});

		vm.deleteRecipe = function(recipe) {
		CommunityFactory.deleteRecipe(recipe._id).then(function() {
			vm.recipes.splice(vm.recipes.indexOf(recipe), 1);
			});
	};

	vm.goToAddRecipe = function(){
		// HomeFactory.goToCom($stateParams.id).then(function(res){
			console.log($stateParams.id);
			$state.go('AddRecipe', {id:$stateParams.id});
		// })
	}

	}
})();
