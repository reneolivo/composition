import { Vue, Component, Prop } from 'vue-property-decorator';
import $ from 'jquery';
import Confirm from '@/components/Confirm/index.ts';
import SellPlayerModal from '@/components/SellPlayerModal/index.ts';

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
