import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class UiImageUrlCollectorComponent extends Component {
  @tracked
  imageUrl = '';
  /* 
    @tracked
    images = [];
 */
  @action
  verifyAndAddImage() {
    //this.images = [...this.images, this.imageUrl];
    this.args.onAddUrl([...this.args.images, this.imageUrl]);
    this.imageUrl = '';
  }

  @action
  removeImage(src) {
    this.args.onAddUrl(this.args.images.filter((e) => e !== src));
  }

  get isDisabled() {
    return !this.imageUrl.length;
  }
}
