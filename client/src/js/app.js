(function() {
    'use strict';

    angular.module('prj.name', [
        //Third-party module
        'iu.router',
        'angular-carousel',
        'hmTouchEvent',
        'angular-md5',
        'base64',
        //Foundation module
        'foundation',
        'foundation.dynamicRouting',
        'foundation.dynamicRouting.animations',
        //My modules
        'prj.name.directives',
        'prj.name.controllers',
        'prj.name.services
    ])
      .config(config)
      .run(run)
    ;

    config.$inject = ['$urlRouterProvider', '$locationProvider'];

    function config($urlProvider, $locationProvider) {
        $urlProvider.otherwise('/');

        $locationProvider.html5Mode({
          enabled:false,
          requireBase: false
        });

        $locationProvider.hashPrefix('!');
    }

    function run() {
        FastClick.attach(document.body);
    }
})();
