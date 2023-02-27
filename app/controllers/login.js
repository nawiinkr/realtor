import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import md5 from 'crypto-js/md5';

export default class LoginController extends Controller {
  @service store;
  @service router;

  @tracked email = '';

  @tracked password = '';

  @tracked
  successMessage = null;

  @tracked
  errorMessage = null;

  get disabled() {
    return (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email) ||
      !this.password.trim()
    );
  }

  storeSession() {
    localStorage.setItem('loggedInUser', this.email);
  }

  @action
  async login() {
    this.successMessage = null;
    this.errorMessage = null;
    const existingUsers = await this.store.findAll('user');
    if (
      existingUsers.find(
        (e) =>
          e.email === this.email && e.password === md5(this.password).toString()
      )
    ) {
      this.successMessage = 'Logged in successfully';
      this.storeSession();
      location.reload();
    } else {
      this.errorMessage = 'Email or password incorrect!!';
    }
  }
}
