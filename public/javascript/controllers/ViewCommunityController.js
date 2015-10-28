(function() {
	'use strict';
	angular.module('app')
	.controller('ViewCommunityController', ViewCommunityController);


	function ViewCommunityController(CommunityFactory, $stateParams, $state) {
		var vm = this;

		if($stateParams.id){
			CommunityFactory.getAllRecipes($stateParams.id).then(function(res) {
			// if($stateParams.id == res[i].community){
			vm.recipes = res;
	// 	}
		});
		}

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
	};


	vm.editRecipe = function(id) {
		console.log(id, 2);
		$state.go('EditRecipe', {id: id});
	};


	vm.getCopy = function(com) {
		return angular.copy(com);
	};

	vm.editCom = function (comId, com) {
			CommunityFactory.editCom({IDofComToEdit: comId, comEdited: com}).then(function (res) {
				vm.editedCom = null;
				if($stateParams.id){
						CommunityFactory.getAllRecipes($stateParams.id).then(function(res) {
							vm.recipes = res;
						});
				}
				});
};
	}
})();
