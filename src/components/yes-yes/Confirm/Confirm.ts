import { Vue, Component, Prop } from 'vue-property-decorator';
import Modal from '@/components/yes-yes/Modal/Modal.ts';

@Component({
  template: require('./Confirm.html'),
  components: {
    Modal,
  }
})
export default class Confirm extends Vue {
  @Prop({ default: 'ConfirmModal'})
  modalId;

  @Prop({ default: () => {} })
  onConfirm;

  modalEvents = new Vue();

  handleConfirmation() {
    this.onConfirm();
    this.modalEvents.$emit('hide');
  }
}
