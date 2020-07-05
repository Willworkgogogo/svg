module.exports = {
  title: '文字',
  subTitle: '由文字组成的图形',
  remark: '',
  properties: [
    {
      name: 'x',
      desc: 'x轴位置',
      component: 'slider',
      initialValue: 30,
    },
    {
      name: 'y',
      desc: 'y轴位置',
      component: 'slider',
      initialValue: 60,
    },
    {
      name: 'font-family',
      desc: '字体',
      component: 'input',
      initialValue: 'Verdana',
    },
    {
      name: 'font-size',
      desc: '字体大小',
      component: 'number',
      initialValue: 50,
    },
    {
      name: 'children',
      desc: '文本内容',
      component: 'input',
      initialValue: 'Hello SVG',
    },
  ],
};
