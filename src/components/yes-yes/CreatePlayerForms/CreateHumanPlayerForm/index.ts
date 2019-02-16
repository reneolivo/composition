import { Vue, Component, Prop } from 'vue-property-decorator';
import CreatePlayerForm from '../CreatePlayerForm';

@Component({
  template: require('./CreateHumanPlayerForm.html'),
  components: {
    CreatePlayerForm,
  },
})
export default class CreateHumanPlayerForm extends Vue {
  player = {};
  positions = [
    'Lineman',
    'Catcher',
    'Thrower',
    'Blitzer',
    'Ogre',
  ];

  getPlayerPrice() {
    const strength = parseInt(this.player.strength || 0, 10);
    const agility = parseInt(this.player.agility || 0, 10);
    const movement = parseInt(this.player.movement || 0, 10);

    return (((strength + agility + movement) / 3) * 100).toFixed(0);
  }
}
