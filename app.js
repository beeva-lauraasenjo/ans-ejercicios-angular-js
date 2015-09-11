'use strict';

angular.module('myApp', ['ngRoute','myApp.version'])
    .config(['$routeProvider',
      function($routeProvider){
        $routeProvider

            .when('/home',{
              templateUrl: 'Views/home.html',
              controller: 'MainController'
            })

            .when('/equipos',{
              templateUrl: 'Views/equipos.html',
              controller: 'MainController'
            })

            .otherwise({
              redirectTo: '/home'
            });

      }]);
