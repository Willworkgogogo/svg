import { IComponentConfig } from '@/types';
import { IRoute } from 'umi';

const fs = require('fs');
const path = require('path');
const rootPath = path.resolve(__dirname, '../');
const svgPath = path.resolve(rootPath, './src/components/svg');

const svgGroupNameMap: Record<string, string> = {
  'basic-shape': '基础形状元素',
  container: '容器元素',
  'text-content': '文本内容',
};

function getSvgRoutes() {
  const dirs: string[] = fs.readdirSync(svgPath);
  return dirs
    .map((dirName: string) => {
      const dirPath = `${svgPath}/${dirName}`;
      const files: string[] = fs.readdirSync(dirPath);
      if (!files.length) return null;
      const children = files.reduce<IRoute[]>((pre, filename) => {
        const filePath = `${dirPath}/${filename}`;
        const componentConfig: IComponentConfig = require(filePath);
        const filenameWithNoSuffix = `${filename.split('.')[0]}`;
        const name = `${filenameWithNoSuffix} ${componentConfig.title}`;
        pre.push(getSVGRouteItem(filenameWithNoSuffix, name));
        return pre;
      }, []);
      const groupRoute = getSVGGroupRoute(dirName, children);
      return groupRoute;
    })
    .filter(Boolean);
}

function getSVGRouteItem(filename: string, name: string): IRoute {
  return {
    path: `${filename}`,
    name,
    component: '@/svg',
    exact: true,
  };
}

function getSVGGroupRoute(dirName: string, children: IRoute[]) {
  return {
    path: `/svg/${dirName}`,
    name: svgGroupNameMap[dirName],
    routes: children,
  };
}

const svgRoutes = getSvgRoutes();

// TODO add 404 page

// TODO 这个路由的写法是否有问题？有没有更好的组织方式
// 此处想实现统一的路由渲染svg组件页面，但左边栏还是要生成所有标签的路由导航
export const routes = [...svgRoutes, { path: '/404', component: './404' }] as IRoute[];
