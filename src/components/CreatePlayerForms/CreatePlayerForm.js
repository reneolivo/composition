import { Vue } from 'vue-property-decorator';

export default class CreatePlayerForm extends Vue {
  player = {};

  get playerPrice() {
    return 0;
  }
}
