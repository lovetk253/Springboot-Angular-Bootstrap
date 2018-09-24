'use strict';

angular.module('crudApp').controller(
				'ReaderController',
				[
						'ReaderService',
						'$scope',
						function(ReaderService, $scope) {

							var self = this;
							self.reader = {};
							self.readers = [];

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
								if (self.reader.id === undefined
										|| self.reader.id === null) {
									console.log('Saving New Reader', self.reader);
									createUser(self.reader);
								} else {
									updateUser(self.reader, self.reader.id);
									console.log('Reader updated with id ',
											self.reader.id);
								}
							}

							function createUser(reader) {
								console.log('About to create Reader');
								ReaderService
										.createUser(reader)
										.then(
												function(response) {
													console
															.log('Reader created successfully');
													self.successMessage = 'Reader created successfully';
													self.errorMessage = '';
													self.done = true;
													reset();
													$scope.myForm
															.$setPristine();
												},
												function(errResponse) {
													console
															.error('Error while creating Reader');
													self.errorMessage = 'Error while creating Reader: '
															+ errResponse.data.errorMessage;
													self.successMessage = '';
												});
							}

							function updateUser(reader, id) {
								console.log('About to update Reader');
								ReaderService
										.updateUser(reader, id)
										.then(
												function(response) {
													console
															.log('Reader updated successfully');
													self.successMessage = 'Reader updated successfully';
													self.errorMessage = '';
													self.done = true;
													self.reader = {};
													$scope.myForm.$setPristine();
													reset();
												},
												function(errResponse) {
													console
															.error('Error while updating Reader');
													self.errorMessage = 'Error while updating Reader'
															+ errResponse.data;
													self.successMessage = '';
												});
							}

							function removeUser(id) {
								console.log('About to remove User with id '
										+ id);
								ReaderService
										.removeUser(id)
										.then(
												function() {
													console
															.log('Reader '
																	+ id
																	+ ' removed successfully');
												},
												function(errResponse) {
													console
															.error('Error while removing Reader'
																	+ id
																	+ ', Error :'
																	+ errResponse.data);
												});
							}

							function getAllUsers() {
								return ReaderService.getAllUsers();
							}

							function editUser(id) {
								self.successMessage = '';
								self.errorMessage = '';
								ReaderService
										.getUser(id)
										.then(
												function(reader) {
													self.reader = reader;
												},
												function(errResponse) {
													console
															.error('Error while removing Reader'
																	+ id
																	+ ', Error :'
																	+ errResponse.data);
												});
							}
							function reset() {
								self.successMessage = '';
								self.errorMessage = '';
								self.reader = {};
								$scope.myForm.$setPristine(); // reset Form
							}
						} ]);