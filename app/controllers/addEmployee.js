app.controller('AddEmployee', function(KonaServices, $scope){

  $scope.addEmployeeForm = function(){
    var employee = {
      'first' : $scope.first,
      'last'  : $scope.last,
      'state' : $scope.state,
      'city'  : $scope.city,
      'street': $scope.street,
      'email' : $scope.email,
      'phone' : $scope.phone,
      'gender': $scope.gender,
    };
    KonaServices.addNewEmployee(employee);
  }

})
