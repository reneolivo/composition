import { Vue, Component, Prop } from 'vue-property-decorator';
import './PlayersListCards.scss';

@Component({
  template: require('./PlayersListCards.html'),
})
export default class PlayersListCards extends Vue {
  @Prop()
  players;

  @Prop()
  team;
}
