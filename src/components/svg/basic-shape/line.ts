module.exports = {
  title: '线',
  subTitle: '用来创建一条连接两个点的线。',
  remark: '',
  properties: [
    {
      name: 'x1',
      desc: '定义线起点的x坐标',
      component: 'slider',
      initialValue: 30,
    },
    {
      name: 'x2',
      desc: '定义线终点的x坐标',
      component: 'slider',
      initialValue: 40,
    },
    {
      name: 'y1',
      desc: '定义线起点的y坐标',
      component: 'slider',
      initialValue: 10,
    },
    {
      name: 'y2',
      desc: '定义线终点的y坐标',
      component: 'slider',
      initialValue: 50,
    },
    {
      name: 'stroke',
      desc: '边框',
      component: 'color',
      initialValue: '#9c27b0',
    },
    {
      name: 'stroke-width',
      desc: '边框宽度',
      component: 'slider',
      initialValue: '5',
    },
  ],
};
