(function() {
	'use strict';
	angular.module('app')
	.controller('AddCommunityController', AddCommunityController);


	function AddCommunityController(CommunityFactory, $state) {
		var vm = this;
		vm.community = {};

		vm.addCommunity = function(){
		      CommunityFactory.addCommunity(vm.community).then(function(res) {
										console.log(vm.community);
		                $state.go('Home');
		            });
		          };

		vm.colors = ['#f5f5f5','#b9f6ca','#ff80ab','#ffff8d', '#84ffff', '#80d8ff', '#448aff' ,'#b388ff', '#8c9eff', '#ff8a80'];

		vm.icons = ["zmdi zmdi-drink", "zmdi zmdi-cocktail", "zmdi zmdi-cutlery", "zmdi zmdi-eyedropper", "zmdi zmdi-fire", "zmdi zmdi-flash", "zmdi zmdi-mood-bad", "zmdi zmdi-mood"];
		//star <i class="zmdi zmdi-star"></i>


	}
})();
