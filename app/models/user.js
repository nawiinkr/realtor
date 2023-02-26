import Model, { attr, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') email;
  @attr('string') firstName;
  @attr('string') lastName;
  @attr('number') gender;
  @attr('number') userType;
  @attr('string') phone;
  @attr('date') birthday;
  @attr('string') password;

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get genderText() {
    switch (this.gender) {
      case 1:
        return 'Male';
      case 2:
        return 'Female';
      case 3:
        return 'Other';
      case 4:
        return 'Prefer Not to say';
    }
  }

  get userTypeText() {
    switch (this.userType) {
      case 1:
        return 'Buyer/Owner';
      case 2:
        return 'Agent';
      case 3:
        return 'Builder';
      case 4:
        return 'Other';
    }
  }

  @hasMany('rental')
  rentals;
}
