<div class="generic-container">
	<div class="panel panel-default">
		<!-- Default panel contents -->
		<div class="panel-heading">
			<span class="lead">Enter info Reader </span>
		</div>
		<div class="panel-body">
			<div class="formcontainer">
				<div class="alert alert-success" role="alert"
					ng-if="ctrl.successMessage">{{ctrl.successMessage}}</div>
				<div class="alert alert-danger" role="alert"
					ng-if="ctrl.errorMessage">{{ctrl.errorMessage}}</div>
				<form ng-submit="ctrl.submit()" name="myForm"
					class="form-horizontal">
					<input type="hidden" ng-model="ctrl.reader.id" />
					<div class="row">
						<div class="form-group col-md-12">
							<label class="col-md-2 control-lable" for="address">Address</label>
							<div class="col-md-7">
								<input type="text" ng-model="ctrl.reader.address" id="address"
									class="form-control input-sm"
									placeholder="Enter your address" required ng-minlength="3" />
							</div>
						</div>
					</div>

					<div class="row">
						<div class="form-group col-md-12">
							<label class="col-md-2 control-lable" for="birthday">Birthday</label>
							<div class="col-md-7">
								<input type="date" ng-model="ctrl.reader.birthday" id="birthday"
									class="form-control input-sm"
									placeholder="Enter your birthday" />
							</div>
						</div>
					</div>

					<div class="row">
						<div class="form-group col-md-12">
							<label class="col-md-2 control-lable" for="firstName">First Name</label>
							<div class="col-md-7">
								<input type="text" ng-model="ctrl.reader.firstName" id="firstName" 
									class="form-control input-sm"
									placeholder="Enter your first name" required ng-minlength="3" />
							</div>
						</div>
					</div>
					
					<div class="row">
						<div class="form-group col-md-12">
							<label class="col-md-2 control-lable" for="lastName">Last Name</label>
							<div class="col-md-7">
								<input type="text" ng-model="ctrl.reader.lastName" id="lastName" 
									class="form-control input-sm"
									placeholder="Enter your last name" required ng-minlength="3" />
							</div>
						</div>
					</div>
					
					<div class="row">
						<div class="form-group col-md-12">
							<label class="col-md-2 control-lable" for="sex">Sex</label>
							<div class="col-md-7">
								<input type="text" ng-model="ctrl.reader.sex" id="sex" 
									class="form-control input-sm"
									placeholder="Enter your sex" required ng-minlength="3" />
							</div>
						</div>
					</div>

					<div class="row">
						<div class="form-actions floatRight">
							<input type="submit" value="{{!ctrl.reader.id ? 'Add' : 'Update'}}"
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
			<span class="lead">List of Reader </span>
		</div>
		<div class="panel-body">
			<div class="table-responsive">
				<table class="table table-hover">
					<thead>
						<tr>
							<th>ID</th>
							<th>Address</th>
							<th>Birthday</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Sex</th>
							<th width="100"></th>
							<th width="100"></th>
						</tr>
					</thead>
					<tbody>
						<tr ng-repeat="u in ctrl.getAllUsers()">
							<td>{{u.id}}</td>
							<td>{{u.address}}</td>
							<td>{{u.birthday | date:dd/MM/yyyy}}</td>
							<td>{{u.firstName}}</td>
							<td>{{u.lastName}}</td>
							<td>{{u.sex}}</td>
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