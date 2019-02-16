import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Players from './views/Players/index.ts';
import TeamsPage from './views/TeamsPage/index.ts';
import CreatePlayerPage from './views/CreatePlayerPage/index.ts';
import { default as yesyes } from './views/yes-yes';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/teams',
      name: 'teams',
      component: TeamsPage,
    },
    {
      path: '/teams/:teamId',
      name: 'players',
      component: Players,
    },
    {
      path: '/teams/:teamId/create-player',
      name: 'Create Player',
      component: CreatePlayerPage,
    },
    {
      path: '/yes-yes',
      name: 'yes-yes',
      component: yesyes.YesYes,
      children: [
        {
          path: 'teams',
          name: 'yes-yes/Teams',
          component: TeamsPage,
        },
        {
          path: 'teams/:teamId',
          name: 'yes-yes/Team Players',
          component: yesyes.TeamPlayers,
        },
        {
          path: 'teams/:teamId/create-player',
          name: 'yes-yes/Create Player',
          component: yesyes.CreatePlayerPage,
        },
      ],
    },
  ],
});
