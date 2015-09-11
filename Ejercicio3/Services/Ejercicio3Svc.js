angular.module('myApp').factory('Ejercicio3Svc',['$http',
    function($http){

        return{

            readFileContent : function(file){
                return $http({method: 'GET', url: file.name});
            }

        };
    }
]);