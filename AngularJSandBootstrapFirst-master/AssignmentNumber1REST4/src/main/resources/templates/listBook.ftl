<div class="generic-container">
	<div class="panel panel-default">
		<!-- Default panel contents -->
		<div class="panel-heading">
			<span class="lead">Enter info Book </span>
		</div>
		<div class="panel-body">
			<div class="formcontainer">
				<div class="alert alert-success" role="alert"
					ng-if="ctrl.successMessage">{{ctrl.successMessage}}</div>
				<div class="alert alert-danger" role="alert"
					ng-if="ctrl.errorMessage">{{ctrl.errorMessage}}</div>
				<form ng-submit="ctrl.submit()" name="myForm"
					class="form-horizontal">
					<input type="hidden" ng-model="ctrl.book.id" />
					<div class="row">
						<div class="form-group col-md-12">
							<label class="col-md-2 control-lable" for="nameBook">Name
								book</label>
							<div class="col-md-7">
								<input type="text" ng-model="ctrl.book.nameBook" id="nameBook"
									class="username form-control input-sm"
									placeholder="Enter your name book" required ng-minlength="3" />
							</div>
						</div>
					</div>

					<div class="row">
						<div class="form-group col-md-12">
							<label class="col-md-2 control-lable" for="publisher">Publisher</label>
							<div class="col-md-7">
								<input type="text" ng-model="ctrl.book.publisher" id="publisher"
									class="form-control input-sm"
									placeholder="Enter your publisher" required ng-minlength="3" />
							</div>
						</div>
					</div>

					<div class="row">
						<div class="form-group col-md-12">
							<label class="col-md-2 control-lable" for="publishingYear">Publishing
								Year</label>
							<div class="col-md-7">
								<input type="text" ng-model="ctrl.book.publishingYear"
									id="publishingYear" class="form-control input-sm"
									placeholder="Enter your publishing year" required
									ng-pattern="ctrl.onlyNumbers" />
							</div>
						</div>
					</div>

					<div class="row">
						<div class="form-actions floatRight">
							<input type="submit" value="{{!ctrl.book.id ? 'Add' : 'Update'}}"
								class="btn btn-primary btn-sm"
								ng-disabled="myForm.$invalid || myForm.$pristine" />
							<button type="button" ng-click="ctrl.reset()"
								class="btn btn-warning btn-sm" ng-disabled="myForm.$pristine">Reset
								Form</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
	<div class="panel panel-default">
		<!-- Default panel contents -->
		<div class="panel-heading">
			<span class="lead">List of Books </span>
		</div>
		<div class="panel-body">
			<div class="table-responsive">
				<table class="table table-hover">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name book</th>
							<th>Publisher</th>
							<th>Publishing Year</th>
							<th width="100"></th>
							<th width="100"></th>
						</tr>
					</thead>
					<tbody>
						<tr ng-repeat="u in ctrl.getAllUsers()">
							<td>{{u.id}}</td>
							<td>{{u.nameBook}}</td>
							<td>{{u.publisher}}</td>
							<td>{{u.publishingYear}}</td>
							<td><button type="button" ng-click="ctrl.editUser(u.id)"
									class="btn btn-success custom-width">Edit</button></td>
							<td><button type="button" ng-click="ctrl.removeUser(u.id)"
									class="btn btn-danger custom-width">Remove</button></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>