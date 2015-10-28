angular.module('QuizApp')
	.factory('LocalService', function($window) {

		return {
			get: function() {
				return $window.localStorage['auth_token'];
			},
			set: function(token) {
				console.log("luong")
				 $window.localStorage['auth_token'] = token;
			},
			unset: function() {
				 $window.localStorage.removeItem('auth_token');
			}
		};
	});