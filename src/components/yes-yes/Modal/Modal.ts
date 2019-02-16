import { Vue, Component, Prop } from 'vue-property-decorator';
import $ from 'jquery';

@Component({
  template: require('./Modal.html'),
})
export default class Modal extends Vue {
  @Prop()
  modalId;

  @Prop({ default: () => new Vue() })
  modalEvents;

  @Prop({ default: '' })
  size;

  sizeMaps = {
    small: 'modal-sm',
    large: 'modal-lg',
  };

  get modalSize() {
    return this.sizeMaps[this.size] || '';
  }

  mounted() {
    this.modalEvents.$on('show', () => $(this.$el).modal('show'));
    this.modalEvents.$on('hide', () => $(this.$el).modal('hide'));
  }
}
