//import Ember from 'ember';
import Controller from '@ember/controller';

export default Controller.extend({
actions: {
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
              lyrics:lyrics
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
