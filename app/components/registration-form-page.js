import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class RegistrationFormPageComponent extends Component {
  @action
  onFormSubmit(e) {
    e.preventDefault();
    this.args.submitAction(e);
  }
}
