// app/controllers/song/edit.js
//import Ember from 'ember';
 import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        save: function() {
            var d = this.get('model');
            d.save();
            this.transitionToRoute('song');
            },
        del: function() {
            this.get('model').deleteRecord();
            this.transitionToRoute('song');
            this.get('model').save();
        }
    }
});
