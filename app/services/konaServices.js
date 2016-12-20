app.factory('KonaServices', function ($http, $q) {

  var employee;

  return {

    getListEmployees : function(){

      var deferred = $q.defer();
      $http.get('http://localhost:5000/employees')
        .then(function(response){
          deferred.resolve(response.data);
        }, function(error){
          deferred.reject(error);
        });
      return deferred.promise;
    },

    addNewEmployee : function(employee){

      var deferred = $q.defer();
      $http.post('http://localhost:5000/employees', employee)
        .then(function(response){
          deferred.resolve(response.data);
        }, function(error){
          deferred.reject(error);
        });
      return deferred.promise;
    },

    getEmployee : function(){
      return employee;
    },

    setEmployee : function(emp){
      employee = emp;
    }

  };
  $http.get()

});
