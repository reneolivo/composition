import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Players from './views/Players';
import TeamsPage from './views/TeamsPage';

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
      path: '/teams/:id',
      name: 'players',
      component: Players,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
