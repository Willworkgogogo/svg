module.exports = {
  title: '矩形',
  subTitle: '用来创建矩形，基于一个角位置以及它的宽和高。它还可以用来创建圆角矩形。',
  remark: '',
  properties: [
    {
      name: 'x',
      desc: '左上角 x 轴坐标。',
      component: 'slider',
      initialValue: 50,
    },
    {
      name: 'y',
      desc: '左上角 y 轴坐标。',
      component: 'slider',
      initialValue: 50,
    },
    {
      name: 'width',
      desc: '水平长度',
      component: 'slider',
      initialValue: 50,
    },
    {
      name: 'height',
      desc: '垂直高度',
      component: 'slider',
      initialValue: 50,
    },
    {
      name: 'rx',
      desc: 'x轴向的圆角半径尺寸',
      component: 'slider',
      initialValue: 2,
    },
    {
      name: 'ry',
      desc: 'y轴向的圆角半径尺寸',
      component: 'slider',
      initialValue: 2,
    },
    {
      name: 'fill',
      desc: '填充色',
      component: 'color',
      initialValue: '',
    },
  ],
};
