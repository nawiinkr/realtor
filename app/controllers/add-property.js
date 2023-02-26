import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class AddPropertyController extends Controller {
  @service
  store;

  @service
  router;

  title = '';
  owner = '';
  description = '';
  city = '';
  location = '';
  noOfBedrooms = '';
  category = '';
  imageUrl = '';

  @action
  async createRecord(event) {
    event.preventDefault();
    debugger;
    const propertyObject = this.store.createRecord('rental', {
      title: this.title,
      owner: this.owner,
      city: this.city,
      location: this.location,
      category: this.category,
      image: this.imageUrl,
      bedrooms: this.noOfBedrooms,
      description: this.description,
    });
    await propertyObject.save();
    this.router.transitionTo('index');
  }

  @action
  setBedrooms(event) {
    this.noOfBedrooms = +event.target.value;
  }
  @action
  setCategory(event) {
    this.category = event.target.value;
  }
}
