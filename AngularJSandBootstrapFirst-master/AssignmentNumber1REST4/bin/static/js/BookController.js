'use strict';

angular.module('crudApp').controller('BookController',
				['BookService', '$scope', 
					function(BookService, $scope) {

							var self = this;
							self.book = {};
							self.books = [];

							self.submit = submit;
							self.getAllUsers = getAllUsers;
							self.createUser = createUser;
							self.updateUser = updateUser;
							self.removeUser = removeUser;
							self.editUser = editUser;
							self.reset = reset;

							self.successMessage = '';
							self.errorMessage = '';
							self.done = false;

							self.onlyIntegers = /^\d+$/;
							self.onlyNumbers = /^\d+([,.]\d+)?$/;

							function submit() {
								console.log('Submitting');
								if (self.book.id === undefined
										|| self.book.id === null) {
									console.log('Saving New Book', self.book);
									createUser(self.book);
								} else {
									updateUser(self.book, self.book.id);
									console.log('Book updated with id ',
											self.book.id);
								}
							}

							function createUser(book) {
								console.log('About to create Book');
								BookService
										.createUser(book)
										.then(
												function(response) {
													console.log('Book created successfully');
													self.successMessage = 'Book created successfully';
													self.errorMessage = '';
													self.done = true;
													reset();
													$scope.myForm
															.$setPristine();
												},
												function(errResponse) {
													console
															.error('Error while creating Book');
													self.errorMessage = 'Error while creating Book '
															+ errResponse.data.errorMessage;
													self.successMessage = '';
												});
							}

							function updateUser(book, id) {
								console.log('About to update Book');
								BookService
										.updateUser(book, id)
										.then(
												function(response) {
													console.log('Book updated successfully');
													self.successMessage = 'Book updated successfully';
													self.errorMessage = '';
													self.done = true;
													self.book = {};
													$scope.myForm.$setPristine();
													reset();
												},
												function(errResponse) {
													console.error('Error while updating Book');
													self.errorMessage = 'Error while updating Book '
															+ errResponse.data;
													self.successMessage = '';
												});
							}

							function removeUser(id) {
								console.log('About to remove book with id '
										+ id);
								BookService
										.removeUser(id)
										.then(
												function() {
													console.log('Book '+ id + ' removed successfully');
												},
												function(errResponse) {
													console
															.error('Error while removing Book'
																	+ id
																	+ ', Error :'
																	+ errResponse.data);
												});
							}

							function getAllUsers() {
								return BookService.getAllUsers();
							}

							function editUser(id) {
								self.successMessage = '';
								self.errorMessage = '';
								BookService
										.getUser(id)
										.then(
												function(book) {
													self.book = book;
												},
												function(errResponse) {
													console
															.error('Error while removing Book'
																	+ id
																	+ ', Error :'
																	+ errResponse.data);
												});
							}
							function reset() {
								self.successMessage = '';
								self.errorMessage = '';
								self.book = {};
								$scope.myForm.$setPristine(); // reset Form
							}
						} ]);