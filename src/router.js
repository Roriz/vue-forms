import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/home.vue'),
    },
    {
      path: '/forms',
      name: 'formsList',
      component: () => import(/* webpackChunkName: "about" */ './views/forms/list.vue'),
    },
    {
      path: '/forms/create',
      name: 'formsCreate',
      component: () => import(/* webpackChunkName: "about" */ './views/forms/create.vue'),
    },
    {
      path: '/forms/edit/:id',
      name: 'formsEdit',
      component: () => import(/* webpackChunkName: "about" */ './views/forms/create.vue'),
    },
  ],
});
