import EmberRouter from '@ember/routing/router';
import config from 'realtor/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('contact', { path: 'getting-in-touch' });
  this.route('rental', { path: 'rentals/:rental_id' });
  this.route('add-property');
  this.route('user-registration');
  this.route('login');
  this.route('logout');
});
