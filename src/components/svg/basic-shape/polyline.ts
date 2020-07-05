module.exports = {
  title: '多边形(非闭合)',
  subTitle:
    '用来创建一系列直线连接多个点。典型的一个polyline是用来创建一个开放的形状，最后一点不与第一点相连',
  remark: '',
  properties: [
    {
      name: 'points',
      desc: '属性定义了用来画一个<polyline>元素或画一个SVGElement("polygon") }}元素的点的数列。',
      component: 'input',
      initialValue: '20,100 40,60 70,80 100,20',
    },
    {
      name: 'fill',
      desc: '填充色',
      component: 'color',
      initialValue: '',
    },
  ],
};
