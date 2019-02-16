import { Vue, Component, Prop } from 'vue-property-decorator';
import CreatePlayerForms from '@/components/yes-yes/CreatePlayerForms/index.ts';
import TeamsService from '@/services/TeamService';

@Component({
  template: require('./CreatePlayerPage.html'),
  components: {
    ...CreatePlayerForms,
  }
})
export default class CreatePlayerPage extends Vue {
  team = {};

  created() {
    const teamId = this.$route.params.teamId;

    this.team = TeamsService.getTeamById(teamId);
  }
}
