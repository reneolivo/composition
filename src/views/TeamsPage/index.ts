import { Vue, Component } from 'vue-property-decorator';
import TeamsService from '@/services/TeamService';
import './TeamsPage.scss';

@Component({
  template: require('./TeamsPage.html'),
})
export default class TeamsPage extends Vue {
  teams = [];

  created() {
    this.teams = TeamsService.getTeams();
  }
}
