
angular.module('QuizApp', ['ui.router', 'ui-notification'])
	.constant('api', 'http://localhost:3000/api/v1')
	.config([
		'$stateProvider',
		'$urlRouterProvider',
		function ($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('home', {
					url: '',
					views: {
						'aside': {
							templateUrl: 'components/Users/user_profile.html',
							controller: 'UserProfileCtrl',
							resolve: {
								getUser: function(UserService) {
									return UserService.getUser()
														.then(function  (data) {
															return {data: data, status: "ok"}
														}, function (error) {
															return {status: 'failed'}
														});
								}
							}
						},
						'content': {
							templateUrl: 'components/Subject/Sub.html',
						}
					}
				})

				.state('home.quizs', {
					url: '/:subjectName',
					views: {
						'content@' : {
							templateUrl: 'components/Quizs/quizs.html',
							controller: 'QuizsCtrl'
						}
					}
				})

				.state('home.quizs.questions', {
					url: '/:quiz',
					views: {
						'content@': {
							templateUrl: 'components/Questions/questions.html',
							controller: 'QuestionsCtrl'
							
						}
					}
				})

			$urlRouterProvider.otherwise('/');	
		}
	])


