(function() {
	'use strict';
	angular.module('app')
	.controller('AddCommunityController', AddCommunityController);


	function AddCommunityController(CommunityFactory, $state) {
		var vm = this;
		vm.community = {};

		vm.addCommunity = function(){
		      CommunityFactory.addCommunity(vm.community).then(function(res) {
										console.log(vm.community)
		                $state.go('Home');
		            });
		          }

	}
})();
