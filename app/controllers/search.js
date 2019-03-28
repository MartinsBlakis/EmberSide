//Ember.ArrayController.extend({
//import Controller from '@ember/controller';
//import Ember from 'ember';
 import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    searchSong: function(){
        var keyword = this.get('keyword');
        var regExp = new RegExp(keyword,'i');
        this.get('song').set('content',this.store.filter('title',function(song){
            return regExp.test(song.get('title'));
        }));
    }.observes('keyword'),
  }
});
