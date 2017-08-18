(function(){
    angular.module('accion_lab')
    .controller('accionTableCtrl',accionTableCtrl);
    
    accionTableCtrl.$inject = [
        '$scope',
        'userDetails'
    ];
    
    function accionTableCtrl(
        $scope,
        userDetails
    ){
            var accionVm =this;
            
        userDetails.getuserDetails().then(function(result){
            if(result.data){
                accionVm.jsonRes = result.data;
            }
        },function(error){
           console.log(error);
        }); 
            
        $scope.checkCoulmnName= function(colName){
            if(colName === 'UId' ){
                $scope.CoulmnName = 'UId';
                $scope.sortColumn($scope.CoulmnName);
            } else if(colName === 'title'){
                $scope.CoulmnName = 'title';
                $scope.sortColumn($scope.CoulmnName);
            } else if(colName === 'sumry'){
                $scope.CoulmnName = 'sumry';
                $scope.sortColumn($scope.CoulmnName);
            }            
        }
         // sort ordering (Ascending or Descending). Set true for desending
         $scope.reverse = false; 

         // called on header click
         $scope.sortColumn = function(col){
          $scope.column = col;
          if($scope.reverse){
           $scope.reverse = false;
           $scope.reverseclass = 'arrow-up';
          }else{
           $scope.reverse = true;
           $scope.reverseclass = 'arrow-down';
          }
         };

         // remove and change class
         $scope.sortClass = function(col){
          if($scope.column == col ){
           if($scope.reverse){
            return 'arrow-down'; 
           }else{
            return 'arrow-up';
           }
          }else{
           return '';
          }
         } 
    }
})();