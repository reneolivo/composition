import { Component } from 'vue-property-decorator';
import PlayersList from '@/components/PlayersList';
import TeamsService from '@/services/TeamService';

@Component({
  template: require('./Players.html'),
  components: {
    PlayersList,
  },
})
export default class Players {
  selectedTheme = 'cards';
  team = null;
  
  created() {
    const teamId = this.$route.params.id;
    
    this.team = TeamsService.getTeamById(teamId);
    this.players = TeamsService.getPlayersByTeam(teamId);
  }
  
  selectTheme(theme) {
    this.selectedTheme = theme;
  }
}