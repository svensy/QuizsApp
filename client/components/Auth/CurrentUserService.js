angular.module('QuizApp')
	.factory('CurrentUser', function (LocalService) {
		return {
			user: function () {
				if (LocalService.get()) {
					return angular.fromJson(LocalService.get()).user;
				} else {
					return {};
				}
			}
		};
	});