function ApplicationController($scope)
{
    $scope.f = {}
    $scope.f.booksLoaded = false;
    $scope.f.studentsLoaded = false;
}

angular.module("app")
    .controller("ApplicationController", ApplicationController);