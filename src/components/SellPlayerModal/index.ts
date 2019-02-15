import { Vue, Component, Prop } from 'vue-property-decorator';
import $ from 'jquery';

@Component({
  template: require('./SellPlayerModal.html'),
})
export default class SellPlayerModal extends Vue {
  @Prop()
  modalId;

  @Prop({ default: () => ({}) })
  player;

  @Prop({ default: () => () => {} })
  onConfirm;

  amount = null;

  handleConfirmation() {
    this.onConfirm(this.amount);
    $(this.$el).modal('hide');
  }
}
