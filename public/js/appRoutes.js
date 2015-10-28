angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider

    // home page
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })

    .when('/books', {
      templateUrl: 'views/book.html',
      controller: 'BookController'
    });

    $locationProvider.html5Mode(true);

}]);