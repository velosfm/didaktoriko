	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			.when('/metaptixiakes', {
				templateUrl : 'pages/metaptixiakes.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/didaktorikes', {
				templateUrl : 'pages/didaktorikes.html',
				controller  : 'contactController'
			})
            
            .when('/diplomatikes', {
				templateUrl : 'pages/diplomatikes.html',
				controller  : 'contactController'
			})

			.when('/kostos', {
				templateUrl : 'pages/kostos.html',
				controller  : 'contactController'
			})

			// route for the about page
			.when('/ptixiakes', {
				templateUrl : 'pages/ptixiakes.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	angular.module('bindHtmlExample', ['ngSanitize'])
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Η εκπόνηση μιας διατριβής σε μεταπτυχιακό επίπεδο αποτελεί πρόκληση και στόχο μαζί για έναν φοιτητή, που θέλει να διευρίνει τους ορίζοντες της επαγγελματικής του αποκατάστασης, αξιώνοντας, παράλληλα με την αγορά εργασίας, μια ακαδημαϊκή θέση σε κάποιο τριτοβάθμιο ίδρυμα.';
	});

	scotchApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	scotchApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});