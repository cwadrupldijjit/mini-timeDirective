app.directive('showTime', [function() {
	return {
		restrict: 'E',
		template: '<div> The current time is {{ vm.time | date: "hh:mm:ss" }} </div>', 
		controller: function() {
			var vm = this;
			
			vm.time = new Date();
			vm.refreshDate = true;
			// for(var i = 0; i < 5; i++) {
			// 	setTimeout(function() {
			// 		vm.time = new Date();
			// 		console.log(vm.time);
			// 	}, 1000 * i)
			// }
		},
		controllerAs: 'vm'
	}
}]);