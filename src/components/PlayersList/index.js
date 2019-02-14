import { Component, Prop } from 'vue-property-decorator';
import Confirm from '@/components/Confirm';
import SellPlayerModal from '@/components/SellPlayerModal';
import './PlayersList.scss';

@Component({
  template: require('./PlayersList.html'),
  components: {
    Confirm,
    SellPlayerModal,
  },
})
export default class PlayersList {
  @Prop()
  players;

  @Prop()
  team;

  @Prop()
  selectedPlayer;

  @Prop({ default: 'table' })
  theme;

  onConfirmPlayerDelete() {
    console.log('⚠️ Player deleted!');
  }

  onPlayerSold(amount) {
    console.log(`⚠️ Player sold for ${amount}`);
  }
}
