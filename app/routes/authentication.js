import Route from '@ember/routing/route';

export default class AuthenticationRoute extends Route {
  beforeModel() {
    const appModel = this.modelFor('application');
    if (!this.modelFor('application').loggedIn) {
      this.controllerFor('login').redirectTo = this.routeName;
      this.transitionTo('login');
    } else {
      this.loggedInUser = appModel.user;
    }
  }

  setupController(controller) {
    controller.loggedInUser = this.loggedInUser;
  }
}
