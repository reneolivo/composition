import { Component, Prop } from 'vue-property-decorator';
import './PlayersList.scss';

@Component({
  template: require('./PlayersList.html'),
})
export default class PlayersList {
  @Prop()
  players;

  @Prop()
  team;

  @Prop({ default: 'table' })
  theme;
}
