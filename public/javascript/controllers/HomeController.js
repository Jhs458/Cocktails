(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);


	function HomeController(HomeFactory) {
		var vm = this;

		HomeFactory.getAllCom().then(function(res) {
			//console.log(res)
		  			vm.communities = res;
		  		});


	}
})();
