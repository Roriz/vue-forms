import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/home.vue'),
    },
    {
      path: '/forms',
      name: 'formsList',
      component: () => import(/* webpackChunkName: "forms-list" */ './views/forms/list.vue'),
    },
    {
      path: '/forms/create',
      name: 'formsCreate',
      component: () => import(/* webpackChunkName: "forms-create" */ './views/forms/create.vue'),
    },
    {
      path: '/forms/edit/:id',
      name: 'formsEdit',
      component: () => import(/* webpackChunkName: "forms-create" */ './views/forms/create.vue'),
    },
  ],
});
