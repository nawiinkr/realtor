import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class LogoutRoute extends Route {
  @service router;
  beforeModel() {
    localStorage.removeItem('loggedInUser');
  }

  afterModel() {
    this.router.transitionTo('index');
    location.reload();
  }
}
