import { Vue, Component, Prop } from 'vue-property-decorator';
import CreatePlayerForm from '../CreatePlayerForm';

@Component({
  template: require('./CreateOrcPlayerForm.html'),
  components: {
    CreatePlayerForm,
  },
})
export default class CreateOrcPlayerForm extends Vue {
  player = {};
  positions = [
    'Lineorc',
    'Thrower',
    'Blitzer',
    'Troll',
  ];

  getPlayerPrice() {
    return (this.player.strength || 0) * 100;
  }
}
