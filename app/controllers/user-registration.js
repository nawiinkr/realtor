import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import md5 from 'crypto-js/md5';

export default class UserRegistrationController extends Controller {
  @service store;

  @tracked
  userType = 0;

  @tracked
  firstName = '';

  @tracked
  lastName = '';

  @tracked
  email = '';

  @tracked
  password = '';

  @tracked
  gender = 0;

  @tracked
  phone = '';

  @tracked
  successMessage = null;

  @tracked
  errorMessage = null;

  get disabled() {
    return (
      this.userType < 1 ||
      !this.firstName.trim() ||
      !this.lastName.trim() ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email) ||
      !this.password.trim() ||
      this.gender < 1 ||
      this.phone.length < 10
    );
  }

  @action
  async createAccount() {
    this.successMessage = null;
    this.errorMessage = null;
    const existingUsers = await this.store.findAll('user');
    if (existingUsers.find((e) => e.email === this.email)) {
      this.errorMessage = 'User with same email already exists!';
      return;
    }
    if (existingUsers.find((e) => e.phone === this.phone)) {
      this.errorMessage = 'User with same mobile number already exists!';
      return;
    }

    try {
      const user = this.store.createRecord('user', {
        firstName: this.firstName,
        lastName: this.lastName,
        userType: this.userType,
        email: this.email,
        gender: this.gender,
        phone: this.phone,
        password: md5(this.password).toString(),
      });
      await user.save();
      this.successMessage = 'User Created Successfully';
    } catch (error) {
      this.errorMessage = 'User creation failed, try again later!';
      return;
    }
  }
}
