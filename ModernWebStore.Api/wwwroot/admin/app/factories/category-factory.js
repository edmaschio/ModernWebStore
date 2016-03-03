(function () {
    'use strict';
    angular.module('mwa').factory('CategoryFactory', CategoryFactory);

    CategoryFactory.$inject = ['$http', '$rootScope', 'SETTINGS'];

    function CategoryFactory($http, $rootScope, SETTINGS) {
        var urlPrefix = SETTINGS.SERVICE_URL + 'api/categories';
        
        return {
            get: get,
            post: post,
            put: put,
            remove: remove
        };

        function get() {
            return $http.get(urlPrefix, $rootScope.header);
        }

        function post(category) {
            return $http.post(urlPrefix, category, $rootScope.header);
        }

        function put(category) {
            return $http.put(urlPrefix + '/' + category.id, category, $rootScope.header);
        }

        function remove(category) {
            return $http.delete(urlPrefix + '/' + category.id, $rootScope.header);
        }

    }
})();