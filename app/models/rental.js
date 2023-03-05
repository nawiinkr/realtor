import Model, { attr, belongsTo } from '@ember-data/model';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export default class RentalModel extends Model {
  @attr title;
  @attr owner;
  @attr city;
  @attr location;
  @attr category;
  @attr image;
  @attr bedrooms;
  @attr description;
  @attr userId;
  @attr userEmail;

  get type() {
    if (COMMUNITY_CATEGORIES.includes(this.category)) {
      return 'Community';
    } else {
      return 'Standalone';
    }
  }

  @belongsTo('user') user;
}
