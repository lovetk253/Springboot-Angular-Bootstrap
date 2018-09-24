var app = angular.module('crudApp', [ 'ui.router', 'ngStorage' ]);

app.constant('urls', {
	BASE : 'http://localhost:8080/',
	BOOK_SERVICE_API : 'http://localhost:8080/api/book/',
	READER_SERVICE_API: 'http://localhost:8080/api/reader/',
	BORROWING_SERVICE_API: 'http://localhost:8080/api/borrowing/'
});

app.config(['$stateProvider','$urlRouterProvider',
	
		function($stateProvider, $urlRouterProvider) {
	
			$urlRouterProvider.otherwise('/');
	
			$stateProvider
			
			.state('home', {
				url : '/',
				templateUrl : 'display/home',
			})
			
			.state('displayBook', {
				url : '/book',
				templateUrl : 'display/listBook',
				controller : 'BookController',
				controllerAs : 'ctrl',
				resolve : {
					books : function($q, BookService) {
						console.log('Load all books');
						var deferred = $q.defer();
						BookService.loadAllUsers().then(deferred.resolve, deferred.resolve);
						return deferred.promise;
					}
				}
			})
			
			.state('displayBorrowing', {
				url : '/borrowing',
				templateUrl : 'display/listBorrowing',
				controller : 'BorrowingController',
				controllerAs : 'ctrl',
				resolve : {
					borrowings : function($q, BorrowingService) {
						console.log('Load all borrowing');
						var deferred = $q.defer();
						BorrowingService.loadAllUsers().then(deferred.resolve, deferred.resolve);
						return deferred.promise;
					}
				}
			})
			
			.state('displayReader', {
				url : '/reader',
				templateUrl : 'display/listReader',
				controller : 'ReaderController',
				controllerAs : 'ctrl',
				resolve : {
					readers : function($q, ReaderService) {
						console.log('Load all reader');
						var deferred = $q.defer();
						ReaderService.loadAllUsers().then(deferred.resolve, deferred.resolve);
						return deferred.promise;
					}
				}
			})
		}
]);

