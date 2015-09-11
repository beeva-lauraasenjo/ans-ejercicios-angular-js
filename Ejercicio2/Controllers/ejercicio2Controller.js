angular.module('myApp').controller('Ejercicio2Controller',['$scope',
    function($scope){

        $scope.users = [
            {id:1, name: "alba", age: 18},
            {id:2, name: "pepe", age: 52},
            {id:3, name: "ismael", age: 25},
        ];



        /*$scope.pulsarBoton1 = function(){
            $window.open("/#/vista2", "_self");
        }*/



    }
]);