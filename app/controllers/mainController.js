app.controller('MainController', function (KonaServices, $scope, $location) {

  KonaServices.getListEmployees()
    .then(function(response){
        $scope.employees = response;
    });

  $scope.setEmployee = function(employee){
    KonaServices.setEmployee(employee);
    $location.path('/infoEmployee');

  };
});
