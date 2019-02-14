import { Component, Prop } from 'vue-property-decorator';
import $ from 'jquery';

@Component({
  template: require('./Confirm.html'),
})
export default class Confirm {
  @Prop()
  modalId;

  @Prop({ default: () => {} })
  onConfirm;

  handleConfirmation() {
    this.onConfirm();
    $(this.$el).modal('hide');
  }
}
