'use strict';
 
angular.module('crudApp').factory('BookService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {
 
            var factory = {
                loadAllUsers: loadAllBooks,
                getAllUsers: getAllUsers,
                getUser: getUser,
                createUser: createUser,
                updateUser: updateUser,
                removeUser: removeUser
            };
 
            return factory;
 
            function loadAllBooks() {
                console.log('Fetching all books');
                var deferred = $q.defer();
                $http.get(urls.BOOK_SERVICE_API)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all books');
                            $localStorage.bookss = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading users');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
 
            function getAllUsers(){
                return $localStorage.bookss;
            }
 
            function getUser(id) {
                console.log('Fetching Book with id :'+id);
                var deferred = $q.defer();
                $http.get(urls.BOOK_SERVICE_API + id)
                    .then(
                        function (response) {
                            console.log('Fetched successfully Book with id :'+id);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading Book with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
 
            function createUser(book) {
                console.log('Creating Book');
                var deferred = $q.defer();
                $http.post(urls.BOOK_SERVICE_API, book)
                    .then(
                        function (response) {
                            loadAllUsers();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                           console.error('Error while creating Book : '+errResponse.data.errorMessage);
                           deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
 
            function updateUser(book, id) {
                console.log('Updating Book with id '+id);
                var deferred = $q.defer();
                $http.put(urls.BOOK_SERVICE_API + id, book)
                    .then(
                        function (response) {
                            loadAllUsers();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while updating User with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
 
            function removeUser(id) {
                console.log('Removing Book with id '+id);
                var deferred = $q.defer();
                $http.delete(urls.BOOK_SERVICE_API + id)
                    .then(
                        function (response) {
                            loadAllUsers();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while removing User with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
 
        }
    ]);