var app = angular.module('evamApp', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "home.html"
        })
        .when('/forms/:name', {
            templateUrl: './forms/forms.html',
            controller: 'newFieldController'
        })
});
app.controller('formsTableController', function ($scope, $location) {
    const forms = JSON.parse(localStorage.getItem('forms'));
    $scope.forms = forms;
    $scope.go = function (path) {
        $location.path(path);
    };
    $scope.searchForms = function (val) {
        if (val === "") {
            $scope.forms = forms;
        }else{
            $scope.forms = forms.filter(x => x.name === val);
        }
    }
});

