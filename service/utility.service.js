(function(){
    angular.module('accion_lab')
        .service('apiCall',apiCall);
        // .service('Validator',Validator);

    apiCall.$inject = [
        '$http'
    ];
    function apiCall($http) {
        this.getCall = function (url,config) {
            return $http.get(url,config);
        };
    }
})();