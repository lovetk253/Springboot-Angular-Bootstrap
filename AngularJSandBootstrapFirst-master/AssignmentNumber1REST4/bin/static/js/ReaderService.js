'use strict';
 
angular.module('crudApp').factory('ReaderService',
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
                console.log('Fetching all readers');
                var deferred = $q.defer();
                $http.get(urls.READER_SERVICE_API)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all readers');
                            $localStorage.readers = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading readers');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
 
            function getAllUsers(){
                return $localStorage.readers;
            }
 
            function getUser(id) {
                console.log('Fetching Reader with id :'+id);
                var deferred = $q.defer();
                $http.get(urls.READER_SERVICE_API + id)
                    .then(
                        function (response) {
                            console.log('Fetched successfully Reader with id :'+id);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading Reader with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
 
            function createUser(reader) {
                console.log('Creating reader');
                var deferred = $q.defer();
                $http.post(urls.READER_SERVICE_API, reader)
                    .then(
                        function (response) {
                            loadAllUsers();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                           console.error('Error while creating reader : '+errResponse.data.errorMessage);
                           deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
 
            function updateUser(reader, id) {
                console.log('Updating reader with id '+id);
                var deferred = $q.defer();
                $http.put(urls.READER_SERVICE_API + id, reader)
                    .then(
                        function (response) {
                            loadAllUsers();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while updating Reader with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
 
            function removeUser(id) {
                console.log('Removing reader with id '+id);
                var deferred = $q.defer();
                $http.delete(urls.READER_SERVICE_API + id)
                    .then(
                        function (response) {
                            loadAllUsers();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while removing Reader with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
 
        }
    ]);