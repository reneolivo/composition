import { Component, Prop, Vue } from 'vue-property-decorator';
import './HelloWorld.scss';

@Component({
  template: require('./HelloWorld.html'),
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
