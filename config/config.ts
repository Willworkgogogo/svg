import { defineConfig } from 'umi';
import { routes } from './route';

export default defineConfig({
  locale: {
    title: false,
    antd: true,
  },
  layout: {
    name: 'S V G',
    logo: '/logo.jpg',
    locale: false,
    layout: 'side',
    headerRender: false,
  },
  theme: {
    'primary-color': '#722ED1',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
});
