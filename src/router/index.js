import newSong from '../src/newSong';
import rank from '../src/rank'
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/newsong',
      name: 'newSong',
      component: newSong
    },
    {
      path: '/rank',
      name: 'rank',
      component: rank
    }
  ]
})
export default router;