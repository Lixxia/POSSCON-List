angular.module('App')
  .filter('startswithB', function() {
      return function(a) {
      }
    })
  .factory('bucketlist', function() {
      var db = PouchDB('bucketlist', {adapter: 'websql'})  
      return {
        add: function(thing) {
          thing._id = (new Date()).toISOString()
          return db.put(thing)
        },
        all: function() {
          return db.allDocs({ include_docs: true})
            .then(function(res) {
              return _(res.rows).pluck('doc')
            })
        },
        get: function(id) {
          return db.get(id)
        },
        put: function(thing) {
          return db.put(thing)
        },
        remove: function(thing) {
          return db.remove(thing);
        }
      }
    })