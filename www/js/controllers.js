angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', ['$scope','Chats','$q','$http',function($scope, Chats, $q, $http) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.doRefresh = function(){
    $scope.chats = Chats.refresh();
    $scope.$broadcast("scroll.refreshComplete");
  };
  $scope.takePhoto = function(){

  };
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
}])
.controller('ChatDetailCtrl', ['$scope','$stateParams','Chats','$ionicScrollDelegate', '$state', function($scope, $stateParams, Chats, $ionicScrollDelegate, $state) {
  $scope.chat = Chats.get($stateParams.chatId);
  $scope.goBack = function() {
    $state.go("tab.chats");
  };
  var messageOptions = [
    { content: '<p>Wow, this is really something huh?</p>' },
    { content: '<p>Yea, it\'s pretty sweet</p>' },
    { content: '<p>I think I like Ionic more than I like ice cream!</p>' },
    { content: '<p>Gee wiz, this is something special.</p>' },
    { content: '<img src="img/message1.jpeg" alt=""/>' },
    { content: '<p>Is this magic?</p>' },
    { content: '<p>Am I dreaming?</p>' },
    { content: '<img src="img/message2.jpeg" alt=""/>'},
    { content: '<p>Am I dreaming?</p>' },
    { content: '<p>Yea, it\'s pretty sweet</p>' },
    { content: '<p>I think I like Ionic more than I like ice cream!</p>' }
  ];

  var messageIter = 0;
  $scope.messages = messageOptions.slice(0, messageOptions.length);
  $ionicScrollDelegate.scrollBottom(true);
  $scope.add = function() {
    var nextMessage = messageOptions[messageIter++ % messageOptions.length];
    $scope.messages.push(angular.extend({}, nextMessage));

    // Update the scroll area and tell the frosted glass to redraw itself
    //$ionicFrostedDelegate.update();
    $ionicScrollDelegate.scrollBottom(true);
  };
}])
.controller('CameraCtrl', ['$scope','Camera',function($scope, Camera) {
  $scope.photo = {
    "src":"img/message2.jpeg"
  };
  $scope.takePicture = function() {
    var options = {
      quality : 100,
      sourceType: 1
    };

    Camera.getPicture(options).then(function(imageData) {
      $scope.photo.src = imageData;
    }, function(err) {
      console.log(err);
    });

  };
  $scope.choosePicture = function() {
    var options = {
      quality : 100,
      sourceType: 0
    };

    Camera.getPicture(options).then(function(imageData) {
      $scope.photo.src = imageData;
    }, function(err) {
      console.log(err);
    });

  };
}])

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
