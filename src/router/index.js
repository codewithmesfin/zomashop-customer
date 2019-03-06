import Vue from 'vue';
import Router from 'vue-router';
import AuthService from '@/shared/services';
import routes from './routes';

Vue.use(Router);

const router = new Router({
  hashbang: false,
  mode: 'history',
  routes,
});

export default router;