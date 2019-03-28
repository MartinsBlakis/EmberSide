
import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('song');
  this.route('about');
  this.route('new');
  this.route('search');
  this.route('edit', {
      path: ":song_id"
  });
});

export default Router;
