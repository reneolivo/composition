import { Vue, Component } from 'vue-property-decorator';

@Component({
  template: require('./YesYes.html'),
})
export default class YesYes extends Vue {
  mounted() {
    this.$router.push({ path: '/yes-yes/teams' });
  }
}
