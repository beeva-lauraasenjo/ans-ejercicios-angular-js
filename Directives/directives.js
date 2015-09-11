angular.module('myApp').directive('githubTeam',function(Service){
    return {
        restrict: 'E',
        scope:{
            team:'@'
         },
        template: '<h3>Members:</h3><div ng-repeat="user in users">{{user}}</div>',
        link : function(scope){
            scope.arrayUsers=[];
            var team =  scope.team;
            Service.getUsers(team).then(function(datos){
                scope.arrayUsers=datos.data;

                scope.users = [];

                for(i in scope.arrayUsers){
                    var login = scope.arrayUsers[i].login;
                    scope.users.push(login);
                }
            });

        }

    };
});
