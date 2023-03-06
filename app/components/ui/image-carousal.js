import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import {action}  from '@ember/object';
export default class UiImageCarousalComponent extends Component {
  @tracked
  selectedIndex = 0;

  @action
  increment() {
    this.selectedIndex =
      this.selectedIndex === this.args.imageOptions.length - 1
        ? 0
        : ++this.selectedIndex;
  }

  @action
  decrement() {
    this.selectedIndex =
      this.selectedIndex === 0
        ? this.args.imageOptions.length - 1
        : --this.selectedIndex;
  }
}
