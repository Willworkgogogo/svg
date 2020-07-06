import { defineConfig } from 'umi';
import { routes } from './route';

export default defineConfig({
  base: '/svg',
  publicPath: '/svg/',
  locale: {
    title: false,
    antd: true,
  },
  layout: {
    name: 'SVG',
    logo: '/logo.png',
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
