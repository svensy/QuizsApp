angular.module('QuizApp')
	.controller('HeaderCtrl', ['$scope', 'CurrentUser', 'LocalService', '$state', function ($scope, CurrentUser, LocalService, $state) {
		
		$scope.currentUser = function() {
			if(CurrentUser.user())	return true
			return false;
		}

		$scope.signupButton = function(){
			$('.ui.small.signup.modal')
        .modal('setting', 'transition', 'fade up')
  			.modal('show');
		}


		$scope.loginButton = function(){
			$('.ui.small.login.modal')
        .modal('setting', 'transition', 'fade up')
  			.modal('show');	
		}

		$scope.logout = function() {
			LocalService.unset();
			$state.reload();
		}

	}])