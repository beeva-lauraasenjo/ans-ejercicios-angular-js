angular.module('myApp').controller('Ejercicio3Controller',['$scope','NgTableParams','Ejercicio3Svc',
    function($scope, NgTableParams, Ejercicio3Svc){

        $scope.users = [];

        $scope.openFile = function() {

            var input = document.getElementById('file');

            var file = input.files[0];

            Ejercicio3Svc.readFileContent(file).then(function (data) {
                var fileContent = data.data;
                var arrayUsers = fileContent.split(";");
                arrayUsers.pop();

                for(i in arrayUsers){
                    var user = arrayUsers[i].split(",");
                    var usuario = {
                        name : user[0],
                        age : user[1]
                    };
                    $scope.users.push(usuario);
                }

            }, function (error) {
                alert("Error.");
            });

        }

        /*$scope.tableParams = new NgTableParams({
            page: 1,            // show first page
            count: 10           // count per page
        });*/






    }
]);