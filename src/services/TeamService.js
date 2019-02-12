import players from './mock-data/players';
import teams from './mock-data/teams';

export default class TeamService {
  static getTeams() {
    return teams;
  }
  
  static getTeamById(teamId) {
    return teams.find(team => team.id == teamId);
  }
  
  static getPlayersByTeam(teamId) {
    return players.filter((player) => {
      return player.teamId == teamId;
    });
  }
}