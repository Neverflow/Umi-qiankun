import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
    {
      name: 'Vue App',
      path: '/vue-app/*',
      microApp: 'mirco-app-vue',
    },
    {
      name: 'Vue Iframe',
      path: 'vue-iframe',
      component: './vue-iframe',
    },
  ],
  npmClient: 'pnpm',
  qiankun: {
    master: {
      apps: [
        {
          name: 'mirco-app-vue',
          entry: '//localhost:8080',
        },
      ],
    },
  },
});
