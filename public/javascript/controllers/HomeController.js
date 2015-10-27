(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);


	function HomeController(HomeFactory, $state) {
		var vm = this;
		// vm.coms = {};

		HomeFactory.getAllCom().then(function(res) {
			//console.log(res)
		  			vm.communities = res;
		  		});

		vm.goToCom = function(xid){
			HomeFactory.goToCom(xid).then(function(res){
				$state.go('ViewCommunity', {id:xid});
			})
		}



	}
})();
