import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {

  @service store;

  async model() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    let user = null;
    if (loggedInUser) {
      const users = await this.store.findAll('user');
      user = users.find((e) => e.email === loggedInUser);
    }

    return {
      loggedIn : loggedInUser,
      user : user,
    };
  }
}
