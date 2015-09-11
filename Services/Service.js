angular.module('myApp').service('Service',['$http',
    function($http){

        return{

            getUsers : function(team){
                return $http({method: 'GET', url: 'https://api.github.com/orgs/'+team+'/members'});
            }

        };
    }
]);