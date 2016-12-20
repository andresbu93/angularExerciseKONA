'use strict';

var app = angular.module('MobileAngularUiExamples', [
    "ngRoute",
    "ngTouch",
    "mobile-angular-ui"
]);

/*
 -- Route provider
 */

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: "templates/listEmployee.html",
      controller: "MainController"
    });

    $routeProvider.when('/addnew', {
      templateUrl: "templates/addEmployee.html",
      controller: "AddEmployee"
    });

    $routeProvider.when('/infoEmployee', {
      templateUrl: "templates/infoEmployee.html",
      controller: "InfoEmployee"
    });

    $routeProvider.when('/about', {
      templateUrl: "templates/about.html"
    });
});
