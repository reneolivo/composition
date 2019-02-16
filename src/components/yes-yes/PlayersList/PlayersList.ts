import { Vue, Component, Prop } from 'vue-property-decorator';
import $ from 'jquery';
import Confirm from '@/components/yes-yes/Confirm/Confirm.ts';
import SellPlayerModal from '@/components/yes-yes/SellPlayerModal/SellPlayerModal.ts';

@Component({
  template: require('./PlayersList.html'),
  components: {
    Confirm,
    SellPlayerModal,
  },
})
export default class PlayersList extends Vue {
  @Prop({ default: null })
  selectedPlayer;

  onConfirmPlayerDelete() {
    console.log('⚠️ Player deleted!');
  }

  onPlayerSold(amount) {
    console.log(`⚠️ Player sold for ${amount}`);
  }
}
