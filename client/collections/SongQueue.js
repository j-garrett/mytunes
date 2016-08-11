// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    // when add is called, call playFirst
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function() {
      this.shift(); // returning a value?
      if (this.length > 0) {
        this.playFirst();
      }
    });

    this.on('dequeue', function(model) {
      debugger;
      this.remove(model);
    });
  },

  playFirst: function() {
    this.at(0).play();
  },

});