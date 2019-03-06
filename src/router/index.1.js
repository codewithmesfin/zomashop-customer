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
router.beforeEach((to, from, next) => {
  const authenticated = AuthService.isAuthenticated();
  const userRole = AuthService.getRole();

  const {
    acl
  } = to.meta;
  if (acl && acl.length) {
    if (!acl.includes(userRole)) {
      next({
        name: 'unauthorized'
      });
    }
  }
  if (!authenticated && to.name !== 'home') {
    next({
      name: 'home'
    });
  } else if (authenticated && to.name === 'login') {
    next({
      name: 'dashboard'
    });
  } else {
    next();
  }
});
export default router;