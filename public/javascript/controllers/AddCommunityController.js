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

		vm.colors = ['#f5f5f5','#b9f6ca','#ff80ab','#ffff8d', '#84ffff', '#80d8ff', '#448aff' ,'#b388ff', '#8c9eff', '#ff8a80'];



	}
})();
