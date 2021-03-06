import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import paths from './paths';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: paths,
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => NProgress.done());

export default router;
