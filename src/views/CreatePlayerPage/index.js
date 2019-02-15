import { Component, Prop } from 'vue-property-decorator';
import CreatePlayerForms from '@/components/CreatePlayerForms';
import TeamsService from '@/services/TeamService';

@Component({
  template: require('./CreatePlayerPage.html'),
  components: {
    ...CreatePlayerForms,
  }
})
export default class CreatePlayerPage {
  team = {};

  created() {
    const teamId = this.$route.params.teamId;

    this.team = TeamsService.getTeamById(teamId);
  }
}
