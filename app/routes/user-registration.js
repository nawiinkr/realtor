import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class UserRegistrationRoute extends Route {
  @service store;

  async model() {
    const existingUsers = await this.store.findAll('user', { reload: true });
    return {
      existingUsers: existingUsers,
    };
  }
}
