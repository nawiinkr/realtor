import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { later } from '@ember/runloop';
export default class DropdownMenuComponent extends Component {
  @tracked
  expanded = false;

  @action
  mount(element) {
    this.onClickOtherSection = (event) => {
      if (!element.contains(event.target)) {
        later(() => {
          this.expanded = false;
        });
      }
    };
    document.addEventListener('click', this.onClickOtherSection);
  }
}
