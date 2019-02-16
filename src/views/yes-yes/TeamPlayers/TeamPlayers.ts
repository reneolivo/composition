import { Vue, Component } from 'vue-property-decorator';
import PlayersList from '@/components/yes-yes/PlayersList/index.ts';
import TeamsService from '@/services/TeamService';

@Component({
  template: require('./TeamPlayers.html'),
  components: {
    ...PlayersList,
  },
})
export default class Players extends Vue {
  selectedTheme = 'Cards';
  selectedPlayer = null;
  team = null;

  created() {
    const teamId = this.$route.params.teamId;

    this.team = TeamsService.getTeamById(teamId);
    this.players = TeamsService.getPlayersByTeam(teamId);
  }

  selectTheme(theme) {
    this.selectedTheme = theme;
  }
}
