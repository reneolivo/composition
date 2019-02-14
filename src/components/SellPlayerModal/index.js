import { Component, Prop } from 'vue-property-decorator';
import $ from 'jquery';

@Component({
  template: require('./SellPlayerModal.html'),
})
export default class SellPlayerModal {
  @Prop()
  modalId;

  @Prop({ default: {} })
  player;

  @Prop({ default: () => {} })
  onConfirm;

  amount = null;

  handleConfirmation() {
    this.onConfirm(this.amount);
    $(this.$el).modal('hide');
  }
}
