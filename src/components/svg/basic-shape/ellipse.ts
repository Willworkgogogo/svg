module.exports = {
  title: '椭圆',
  subTitle: '是一个SVG的基本形状，用来创建椭圆，基于一个中心坐标以及它们的x半径和y半径',
  remark: '',
  properties: [
    {
      name: 'cx',
      desc: '用来定义图形中心的 x 轴坐标。',
      component: 'slider',
      initialValue: 50,
    },
    {
      name: 'cy',
      desc: '属性用来定义一个中心点的 y 轴坐标。',
      component: 'slider',
      initialValue: 50,
    },
    {
      name: 'rx',
      desc: '用于定义水平轴向的圆角半径尺寸',
      component: 'slider',
      initialValue: 30,
    },
    {
      name: 'ry',
      desc: '用于定义垂直轴向的圆角半径尺寸',
      component: 'slider',
      initialValue: 10,
    },
    {
      name: 'fill',
      desc: '填充色',
      component: 'color',
      initialValue: '',
    },
  ],
};
