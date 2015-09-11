angular.module('myApp').controller('Ejercicio1Controller',['$scope',
    function($scope){

        $scope.mostrarInput = false;

        $scope.defaultName = function(){
            $scope.mostrarInput = false;
            $scope.usuario = "Laura";
        }

        $scope.userName = function(){
            $scope.usuario = null;
            $scope.mostrarInput = true;
        }

    }
]);