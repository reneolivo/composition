import { Vue, Component, Prop } from 'vue-property-decorator';
import Modal from '@/components/yes-yes/Modal/Modal.ts';

@Component({
  template: require('./SellPlayerModal.html'),
  components: {
    Modal,
  }
})
export default class SellPlayerModal extends Vue {
  @Prop()
  modalId;

  @Prop({ default: () => ({}) })
  player;

  @Prop({ default: () => () => {} })
  onConfirm;

  amount = null;
  modalEvents = new Vue();

  handleConfirmation() {
    this.onConfirm(this.amount);
    this.modalEvents.$emit('hide');
  }
}
