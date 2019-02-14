import { Component, Prop } from 'vue-property-decorator';
import Confirm from '@/components/Confirm';
import './PlayersList.scss';

@Component({
  template: require('./PlayersList.html'),
  components: {
    Confirm,
  },
})
export default class PlayersList {
  @Prop()
  players;

  @Prop()
  team;

  @Prop({ default: 'table' })
  theme;

  onConfirmPlayerDelete() {
    console.log('⚠️ Player deleted!');
  }
}
