angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      lastTime:'11:07',
      face: 'img/ben.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      lastTime:'09:07',
      face: 'img/max.png'
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      lastTime:'10:07',
      face: 'img/adam.jpg'
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      lastTime:'07:07',
      face: 'img/perry.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      lastTime:'09:07',
      face: 'img/max.png'
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      lastTime:'10:07',
      face: 'img/adam.jpg'
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      lastTime:'07:07',
      face: 'img/perry.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      lastTime:'09:07',
      face: 'img/max.png'
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      lastTime:'10:07',
      face: 'img/adam.jpg'
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      lastTime:'07:07',
      face: 'img/perry.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      lastTime:'09:07',
      face: 'img/max.png'
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      lastTime:'10:07',
      face: 'img/adam.jpg'
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      lastTime:'07:07',
      face: 'img/perry.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      lastTime:'09:07',
      face: 'img/max.png'
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      lastTime:'10:07',
      face: 'img/adam.jpg'
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      lastTime:'07:07',
      face: 'img/perry.png'
    }
  ];

  return {
    all: function() {
      return chats;
    },
    refresh: function() {
      var chat = {
        id: 4,
        name: 'Mike Harrington',
        lastText: 'This is wicked good ice cream.',
        lastTime:'08:07',
        face: 'img/mike.png'
      };
      chats.push(chat);
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory('Camera',['$q', function($q) {
  return {
    getPicture: function(options) {
      var q = $q.defer();
      navigator.camera.getPicture(
        function(result) {
          q.resolve(result);
        },
        function(err) {
          q.reject(err);
        },
        options);
      return q.promise;
    }
  }

}]);
