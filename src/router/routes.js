import {
  Login,
  ForgotPassword
} from '@/modules/account';
import NotFoundPage from '@/shared/components/NotFoundPage.vue';
import AppLayout from "@/modules/layout";
import homeRoutes from "@/modules/home/home.routes";
import Dashboard from '@/modules/dashboard';
import userAccountRoutes from '@/modules/account/account.routes';

import Home from '@/modules/home/Home'
import categoryRoutes from '@/modules/category/category.route'
import otherRoutes from '@/modules/other/other.routes'


const routes = [{
    path: '/',
    redirect: '/app',
  },
  {
    path: '/app',
    component: AppLayout,
    redirect: '/app/home',
    children: [
      ...homeRoutes,
      ...categoryRoutes,
      ...otherRoutes,
      ...userAccountRoutes,
      {
        path: 'login',
        name: 'login',
        component: Login,
      },
    ],
  },

  {
    path: '/forgot',
    name: 'forgot',
    component: ForgotPassword,
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFoundPage,
  },
];

export default routes;