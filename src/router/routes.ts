import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/services/:service', component: () => import('pages/services/Service.vue') },
      { path: '/articles/:article', component: () => import('pages/articles/Article.vue') },
    ],
  },

  {
    path: '/:page',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Page.vue') },
      { path: '/:page/:category', component: () => import('pages/catalog/Category.vue') },
      { path: '/:page/:category/:item', component: () => import('pages/catalog/item/Item.vue') },
    ]
  },

  {
    path: '/cart',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Cart.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/404',
    name: 'ErrorNotFound',
    component: () => import('pages/ErrorNotFound.vue'),
  },
  {
    path: "/:catchAll(.*)",
    redirect: '/404',
  },
];

export default routes;
