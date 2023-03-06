import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { task, timeout } from 'ember-concurrency';
import ENV from 'realtor/config/environment';

const MAPBOX_API =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/location.json?country=in&proximity=ip&';

export default class LocationFinderComponent extends Component {
  @tracked
  suggestions = [];

  @tracked
  value= '';

  selected = false;

  get token() {
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
  }

  @action
  async onLocationInput(ev) {
    const { value } = ev.target;
    this.fetchLocationTask.perform(value);
  }

  @action
  setLocation(suggestion) {
    const [lng, lat] = suggestion.geometry.coordinates;
    this.args.setCoordinates(lat, lng);
    this.value = suggestion.place_name;
    this.suggestions = [];
    this.selected = true;
  }

  fetchLocationTask = task({ restartable: true }, async (value) => {
    await timeout(200);
    if(this.selected) {
        this.selected = false;
        return;
    }
    const accessToken = `access_token=${this.token}`;
    const url = `${MAPBOX_API.replace(
      'location',
      encodeURIComponent(value)
    )}${accessToken}`;
    const resp = await fetch(url);
    const response = await resp.json();
    this.suggestions = [...response.features];
  });
}
