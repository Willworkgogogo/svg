module.exports = {
  title: '多边形',
  subTitle: '定义了一个由一组首尾相连的直线线段构成的闭合多边形形状。最后一点连接到第一点',
  remark: '',
  properties: [
    {
      name: 'points',
      desc: '属性定义了用来画一个<polyline>元素或画一个SVGElement("polygon") }}元素的点的数列。',
      component: 'input',
      initialValue: '40,5 20,28 40,28 10,50 30,30 10,30',
    },
    {
      name: 'fill',
      desc: '填充色',
      component: 'color',
      initialValue: '#ffeb3b',
    },
  ],
};
