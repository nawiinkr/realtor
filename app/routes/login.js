import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class LoginRoute extends Route {
  @service router;
  beforeModel() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      this.router.transitionTo('index');
    }
  }
}
