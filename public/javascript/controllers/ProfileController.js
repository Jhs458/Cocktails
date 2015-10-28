
(function() {
  "use strict";
  angular.module('app')
  .controller('ProfileController', ProfileController);
  function ProfileController($stateParams, UserFactory) {
    var vm = this;
    vm.recipearray = {};
    vm.communityarray = {};

// As soon as controller loads, vm.profile will load with recipes.
      UserFactory.getRecipeByUser($stateParams.id).then(function(res){
        console.log(res);
        vm.recipearray = res;
      });

      UserFactory.getCommunityByUser($stateParams.id).then(function(res){
      console.log(res);
      vm.communityarray = res;
    });



  }
})();
