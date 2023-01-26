import Route from '@ember/routing/route';
const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;
  async model() {
    return await this.store.findAll('rental');
  }
}
