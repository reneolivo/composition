import { Component } from 'vue-property-decorator';
import PlayersList from '@/components/PlayersList';

@Component({
  template: require('./Players.html'),
  components: {
    PlayersList,
  },
})
export default class Players {
  selectedTheme = 'cards';
  
  selectTheme(theme) {
    this.selectedTheme = theme;
  }
}