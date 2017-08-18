(function(){
    angular.module('accion_lab')
        .service('userDetails',userDetails);

    userDetails.$inject = [
        'apiCall'
    ];
    
    function userDetails(apiCall){

        this.getuserDetails = function(){
                if (true) {
                    return apiCall.getCall('http://jsonplaceholder.typicode.com/posts');
                } else {
                    return;
                }
        }
    }
})();