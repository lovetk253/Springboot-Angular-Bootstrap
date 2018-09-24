'use strict';

angular.module('crudApp').controller(
				'BorrowingController',
				[
						'BorrowingService',
						'$scope',
						function(BorrowingService, $scope) {

							var self = this;
							self.borrowing = {};
							self.borrowings = [];

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
								if (self.borrowing.idBorrowing === undefined
										|| self.borrowing.idBorrowing === null) {
									console.log('Saving New Borrowing', self.borrowing);
									createUser(self.borrowing);
								} else {
									updateUser(self.borrowing, self.borrowing.idBorrowing);
									console.log('Borrowing updated with id ',
											self.borrowing.idBorrowing);
								}
							}

							function createUser(borrowing) {
								console.log('About to create borrowing');
								BorrowingService
										.createUser(borrowing)
										.then(
												function(response) {
													console
															.log('Borrowing created successfully');
													self.successMessage = 'Borrowing created successfully';
													self.errorMessage = '';
													self.done = true;
													reset();
													$scope.myForm
															.$setPristine();
												},
												function(errResponse) {
													console
															.error('Error while creating Borrowing');
													self.errorMessage = 'Error while creating Borrowing: '
															+ errResponse.data.errorMessage;
													self.successMessage = '';
												});
							}

							function updateUser(borrowing, idBorrowing) {
								console.log('About to update borrowing');
								BorrowingService
										.updateUser(borrowing, idBorrowing)
										.then(
												function(response) {
													console
															.log('Borrowing updated successfully');
													self.successMessage = 'Borrowing updated successfully';
													self.errorMessage = '';
													self.done = true;
													self.borrowing = {};
													$scope.myForm.$setPristine();
													reset();
												},
												function(errResponse) {
													console
															.error('Error while updating Borrowing');
													self.errorMessage = 'Error while updating Borrowing '
															+ errResponse.data;
													self.successMessage = '';
												});
							}

							function removeUser(idBorrowing) {
								console.log('About to remove Borrowing with id ' + idBorrowing);
								BorrowingService
										.removeUser(idBorrowing)
										.then(
												function() {
													console.log('Borrowing '
																	+ idBorrowing
																	+ ' removed successfully');
												},
												function(errResponse) {
													console.error('Error while removing Borrowing '
																	+ idBorrowing
																	+ ', Error :'
																	+ errResponse.data);
												});
							}

							function getAllUsers() {
								return BorrowingService.getAllUsers();
							}

							function editUser(idBorrowing) {
								self.successMessage = '';
								self.errorMessage = '';
								BorrowingService
										.getUser(idBorrowing)
										.then(
												function(borrowing) {
													self.borrowing = borrowing;
												},
												function(errResponse) {
													console
															.error('Error while removing borrowing '
																	+ idBorrowing
																	+ ', Error :'
																	+ errResponse.data);
												});
							}
							function reset() {
								self.successMessage = '';
								self.errorMessage = '';
								self.borrowing = {};
								$scope.myForm.$setPristine(); // reset Form
							}
						} ]);