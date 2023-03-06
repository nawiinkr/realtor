import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class AddPropertyController extends Controller {
  @service
  store;

  @service
  router;

  @tracked
  title = '';

  @tracked
  owner = '';

  @tracked
  description = '';

  @tracked
  city = '';

  @tracked
  location = '';

  @tracked
  noOfBedrooms = 0;

  @tracked
  category = 0;

  @tracked
  imageUrls = [];

  get disabled() {
    return (
      !this.title.trim() ||
      !this.owner.trim() ||
      !this.city.trim() ||
      !this.location.lat ||
      !this.location.lng ||
      !this.imageUrls.length ||
      !this.description.trim() ||
      !this.category ||
      !this.noOfBedrooms
    );
  }

  @action
  async createRecord(event) {
    event.preventDefault();
    const propertyObject = this.store.createRecord('rental', {
      title: this.title,
      owner: this.owner,
      city: this.city,
      location: this.location,
      category: this.category,
      images: this.imageUrls,
      bedrooms: this.noOfBedrooms,
      description: this.description,
      userId: this.loggedInUser.id,
      userEmail: this.loggedInUser.email,
      user: this.loggedInUser,
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

  @action
  addImageUrl(urls) {
    this.imageUrls = [...urls];
  }

  @action
  setCoordinates(lat, lng) {
    this.location = {
      lat,
      lng,
    };
  }
}
