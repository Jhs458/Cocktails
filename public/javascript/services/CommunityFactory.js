(function() {
	'use strict';
	angular.module('app')
	.factory('CommunityFactory', CommunityFactory);


	function CommunityFactory($http, $q) {
		var o = {};

		o.addCommunity = function(com) {
			var q = $q.defer();
			$http.post('/api/community', com).then(function(res) {
				console.log(res);
				q.resolve(res.data);
			});
			return q.promise;
		};

		return o;
	}
})();
