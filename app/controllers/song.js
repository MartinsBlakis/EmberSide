//    CONTROLLER SONG.JS
//import Controller from '@ember/controller';
//import Ember from 'ember';
 import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    readSong() {
       // var set = this.set.bind(this, 'model');
      let findSong = this.get('findSong');
      //let self = this;
      this.song.findSong('song', findSong).then((song) => {
        alert(song.get('title') + ' ' + song.get('artist') + ' ' + song.get('genre') + ' ' + song.get('year') + ' ' + song.get('lyrics'));
      //let model = this.modelFor('user');
      //let model = this.get('controller.model');
      // console.log(model)); // for Get and Set
               //model.get('user');
        //       model.set(dwarf);
        // this.refresh();
      });
    },

    searchSong() {
        var keyword = this.get('keyword');
        //var regExp = new RegExp(keyword,'i');
        var find = this.store.find('song', { title: keyword });
        return find;
    },


    save: function() {
        var title = this.get('title');
        var artist= this.get('artist');
        var genre = this.get('genre');
        var year = this.get('year');
        var lyrics = this.get('lyrics');

        var song = this.store.createRecord('song', {
                title:title,
                artist:artist,
                genre:genre,
                year:year,
                lyrics:lyrics,
        });
        this.set('title','');
        this.set('artist','');
        this.set('genre','');
        this.set('year','');
        this.set('lyrics','');

        song.save();
        this.transitionToRoute('song');

    }
  }
});
