import { Vue, Component, Prop } from 'vue-property-decorator';
import './PlayersListTable.scss';

@Component({
  template: require('./PlayersListTable.html'),
})
export default class PlayersListTable extends Vue {
  @Prop()
  players;

  @Prop()
  team;
}
