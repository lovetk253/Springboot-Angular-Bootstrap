<!DOCTYPE html>
<html lang="en" ng-app="crudApp">
<head>
<meta charset="UTF-8">
<title>${title}</title>

<link href="css/menu.css" rel="stylesheet" />
<link href="css/app.css" rel="stylesheet" />
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/1.0.3/angular-ui-router.min.js"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/localforage/1.6.0/localforage.min.js"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/ngStorage/0.3.11/ngStorage.min.js"></script>

<script src="/js/app.js"></script>
<script src="/js/BookService.js"></script>
<script src="/js/BookController.js"></script>
<script src="/js/BorrowingService.js"></script>
<script src="/js/BorrowingController.js"></script>
<script src="/js/ReaderService.js"></script>
<script src="/js/ReaderController.js"></script>

</head>
<body>

	<!-- NAVIGATION -->
	<nav class="navbar navbar-inverse" role="navigation">
		<div class="navbar-header">
			<a class="navbar-brand" ui-sref="home">Home</a>
		</div>
		<ul class="nav navbar-nav">
			<li><a ui-sref="displayBook" ui-sref-active>Book</a></li>
			<li><a ui-sref="displayBorrowing" ui-sref-active>Borrowing</a></li>
			<li><a ui-sref="displayReader" ui-sref-active>Reader</a></li>
		</ul>
	</nav>

	<!-- MAIN CONTENT -->
	<div class="container">
		<div ui-view></div>
	</div>

</body>
</html>