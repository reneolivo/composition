import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  template: require('./CreatePlayerForm.html'),
})
export default class CreatePlayerForm extends Vue {
  @Prop({ default: () => ({}) })
  player;

  @Prop({ default: () => [] })
  positions;

  @Prop({ default: () => () => {} })
  getPlayerPrice;

  get playerPrice() {
    return this.getPlayerPrice();
  }

  onBuy() {
    console.log(`💰 Player ${this.player.name} bought successfully`);
    console.table({...this.player});
  }
}
