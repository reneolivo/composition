import { Vue, Component, Prop } from 'vue-property-decorator';
import Confirm from '@/components/Confirm/index.ts';
import SellPlayerModal from '@/components/SellPlayerModal/index.ts';
import './PlayersList.scss';

@Component({
  template: require('./PlayersList.html'),
  components: {
    Confirm,
    SellPlayerModal,
  },
})
export default class PlayersList extends Vue {
  @Prop()
  players;

  @Prop()
  team;

  @Prop({ default: 'table' })
  theme;

  selectedPlayer = null;

  onConfirmPlayerDelete() {
    console.log('⚠️ Player deleted!');
  }

  onPlayerSold(amount) {
    console.log(`⚠️ Player sold for ${amount}`);
  }
}
