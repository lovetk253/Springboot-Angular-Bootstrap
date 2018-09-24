'use strict';
 
angular.module('crudApp').factory('BorrowingService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {
 
            var factory = {
                loadAllUsers: loadAllUsers,
                getAllUsers: getAllUsers,
                getUser: getUser,
                createUser: createUser,
                updateUser: updateUser,
                removeUser: removeUser
            };
 
            return factory;
 
            function loadAllUsers() {
                console.log('Fetching all borrowing');
                var deferred = $q.defer();
                $http.get(urls.BORROWING_SERVICE_API)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all borrowing');
                            $localStorage.borrowings = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading borrowing');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
 
            function getAllUsers(){
                return $localStorage.borrowings;
            }
 
            function getUser(idBorrowing) {
                console.log('Fetching borrowing with id :'+ idBorrowing);
                var deferred = $q.defer();
                $http.get(urls.BORROWING_SERVICE_API + idBorrowing)
                    .then(
                        function (response) {
                            console.log('Fetched successfully borrowing with id :'+idBorrowing);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading borrowing with id :'+ididBorrowing);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
 
            function createUser(borrowing) {
                console.log('Creating borrowing');
                var deferred = $q.defer();
                $http.post(urls.BORROWING_SERVICE_API, borrowing)
                    .then(
                        function (response) {
                            loadAllUsers();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                           console.error('Error while creating borrowing : '+errResponse.data.errorMessage);
                           deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
 
            function updateUser(borrowing, idBorrowing) {
                console.log('Updating borrowing with id '+ idBorrowing);
                var deferred = $q.defer();
                $http.put(urls.BORROWING_SERVICE_API + idBorrowing, borrowing)
                    .then(
                        function (response) {
                            loadAllUsers();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while updating borrowing with id :'+ idBorrowing);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
 
            function removeUser(idBorrowing) {
                console.log('Removing borrowing with id '+ idBorrowing);
                var deferred = $q.defer();
                $http.delete(urls.BORROWING_SERVICE_API + idBorrowing)
                    .then(
                        function (response) {
                            loadAllUsers();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while removing borrowing with id :'+ idBorrowing);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
 
        }
    ]);