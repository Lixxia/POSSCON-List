angular.module('App')
    .controller('ListController', function($scope, bucketlist) {
        bucketlist.all().then(function(things){
          $scope.$apply(function() {
            $scope.bucketlist = things  
          })
        })
      })
    .controller('AddController', function($scope, bucketlist, $state) {
      $scope.add = function(thing) {
        bucketlist.add(thing)
        $state.go('main')
      }
    })
    .controller('ShowController', function($scope, $stateParams, bucketlist, $state) {
      bucketlist.get($stateParams.id)
        .then(function(thing) {
          $scope.$apply(function() {
            $scope.thing = thing;
          })
      })
      $scope.delete = function(thing) {
        if (confirm('Are you sure?')) {
          bucketlist.remove(thing)
          $state.go('main')
        }
      }
    })
    .controller('EditController', function($scope, bucketlist, $state, $stateParams) {
        bucketlist.get($stateParams.id)
          .then(function(thing) {
            $scope.$apply(function() {
              $scope.thing = thing;
            })
        })
        $scope.update = function(thing) {
            bucketlist.put(thing)
            $state.go('main');
          }
    })