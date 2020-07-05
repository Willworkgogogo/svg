export interface IComponentConfig {
  /* 顶部标题 */
  title: string;
  /* 顶部子标题 */
  subTitle: string;
  /* 额外的描述内容，放置在页面footer部分的顶部*/
  remark: string;
  /* 组件的属性，由svg的标签的专有属性决定 */
  properties: IProperty[];
}

export interface IProperty {
  /* 属性的名称 */
  name: string;
  /* 描述 */
  desc: string;
  /* 对应内置映射的组件类型 */
  component: ComponentType;
  /* 初始值 */
  initialValue: string | number;
  /* 当组件为number | slider时，允许配置最大值和最小值作为限制 */
  min?: number;
  /* 初始值 */
  max?: number;
}

export type ComponentType = 'number' | 'slider' | 'input' | 'switch';
