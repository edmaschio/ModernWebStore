(function () {
    'use strict';
    angular.module('mwa').factory('ProductFactory', ProductFactory);

    ProductFactory.$inject = ['$http', '$rootScope', 'SETTINGS'];

    function ProductFactory($http, $rootScope, SETTINGS) {
        var urlPrefix = SETTINGS.SERVICE_URL + 'api/products';

        return {
            get: get,
            getById: getById,
            post: post
        };

        function get() {
            return $http.get(urlPrefix, $rootScope.header);
        }

        function getById(id) {
            return $http.get(urlPrefix + '/' + id, $rootScope.header);
        }


        function post(product) {
            return $http.post(urlPrefix, product, $rootScope.header);
        }

        //function put(category) {
        //    return $http.put(urlPrefix + '/' + category.id, category, $rootScope.header);
        //}

        //function remove(category) {
        //    return $http.delete(urlPrefix + '/' + category.id, $rootScope.header);
        //}

    }
})();