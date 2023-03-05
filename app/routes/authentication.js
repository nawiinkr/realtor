import Route from '@ember/routing/route';

export default class AuthenticationRoute extends Route {

    beforeModel() {
        if(!this.modelFor('application').loggedIn) {
            debugger;
            this.controllerFor('login').redirectTo = this.routeName;
            this.transitionTo('login');
        }
    }
}
