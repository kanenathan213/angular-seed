function routeConfig($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'src/views/initial-view.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
    })
    .otherwise({
        redirectTo: '/'
    });
}

function MainCtrl($route, $routeParams, $location) {

    var vm = this;

    vm.$route = $route;
    vm.$location = $location;
    vm.$routeParams = $routeParams;
}

angular
    .module('SeedApp', ['ngRoute','ngAnimate','ui.bootstrap'])
    .config(routeConfig)
    .controller('MainCtrl', MainCtrl);