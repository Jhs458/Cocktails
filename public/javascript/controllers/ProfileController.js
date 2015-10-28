(function() {
 "use strict";
 angular.module('app')
 .controller('ProfileController', ProfileController);
 function ProfileController($stateParams, UserFactory) {
   var vm = this;
   vm.status = UserFactory.status;




   UserFactory.getAllByUser(vm.status._id).then(function(res){
     vm.recipearray = res;
     console.log(vm.recipearray);
     console.log(vm.recipearray.communities);
     console.log(vm.recipearray.recipes);

   });


 }
})();
