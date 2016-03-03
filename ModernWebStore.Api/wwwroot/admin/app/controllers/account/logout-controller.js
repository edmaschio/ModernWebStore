(function () {
    'use strict';
    angular.module('mwa').controller('LogoutCtrl', LogoutCtrl);

    LogoutCtrl.$inject = ['$location', '$rootScope', 'SETTINGS'];

    function LogoutCtrl($location, $rootScope, SETTINGS) {
        var vm = this;

        activate();

        function activate() {
           $rootScope.user = null;
           $rootScope.token = null;
           sessionStorage.removeItem(SETTINGS.AUTH_TOKEN);
           sessionStorage.removeItem(SETTINGS.AUTH_USERuser);

           $location.path('/login');
        }
    }
})();