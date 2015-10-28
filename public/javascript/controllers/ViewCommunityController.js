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
			//console.log($stateParams.id);
			$state.go('AddRecipe', {id:$stateParams.id});
		// })
	}

if($stateParams.id){
	CommunityFactory.getSingleCom($stateParams.id).then(function(res) {
		// console.log(res)
					vm.communities = res;
				});
			}

			vm.deleteCommunity = function(){
				// console.log({id:$stateParams.id});
				var response = prompt("Type confirm to delete community.")
				if(response == "confirm"){
					CommunityFactory.deleteCommunity({id:$stateParams.id}).then(function() {
						// vm.communities.splice(vm.communities.indexOf(id), 1);
							$state.go('Home');
						});
			}
			else{
				// console.log('ViewCommunity', {id:$stateParams.id})
				$state.go('ViewCommunity', {id:$stateParams.id});
			}
			}



	}
})();
