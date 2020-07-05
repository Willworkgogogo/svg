module.exports = {
  title: '圆',
  subTitle: '是一个SVG的基本形状，用来创建圆，基于一个圆心和一个半径',
  remark: '',
  properties: [
    {
      name: 'cx',
      desc: '属性用来定义一个中心点的 x 轴坐标。',
      component: 'slider',
      initialValue: 50,
      min: 0,
      max: 100,
    },
    {
      name: 'cy',
      desc: '属性用来定义一个中心点的 y 轴坐标。',
      component: 'slider',
      initialValue: 50,
      min: 0,
      max: 100,
    },
    {
      name: 'r',
      desc: '属性用来定义圆的半径',
      component: 'slider',
      initialValue: 50,
      min: 0,
      max: 100,
    },
    {
      name: 'fill',
      desc: '填充色',
      component: 'color',
      initialValue: '',
    },
  ],
};
