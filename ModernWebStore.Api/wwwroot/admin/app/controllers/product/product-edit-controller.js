(function () {
    'use strict';
    angular.module('mwa').controller('ProductEditCtrl', ProductEditCtrl);

    ProductEditCtrl.$inject = ['$routeParams', 'ProductFactory'];

    function ProductEditCtrl($routeParams, ProductFactory) {
        var vm = this;
        var id = $routeParams.id;
        vm.product = [];

        activate();

        function activate() {
            getProduct();
        }

        function getProduct() {
            ProductFactory.getById(id)
                .success(success)
                .catch(fail);

            function success(response) {
                vm.product = response;
            }

            function fail(error) {
                if (error.status == 401)
                    toastr.error('Você não tem permissão para ver esta página', 'Requisição não autorizada');
                else
                    toastr.error('Sua requisição não pode ser processada', 'Falha na requisição');
            }

        }
    };
})();