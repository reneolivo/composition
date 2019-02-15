import { Component, Prop } from 'vue-property-decorator';
import CreatePlayerForm from '../CreatePlayerForm';

@Component({
  template: require('./CreateOrcPlayerForm.html'),
})
export default class CreateOrcPlayerForm extends CreatePlayerForm {
  get playerPrice() {
    return (this.player.strength || 0) * 100;
  }
}
