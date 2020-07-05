module.exports = {
  title: '超链接',
  subTitle: '定义一个超链接',
  remark: '',
  properties: [
    {
      name: 'href',
      desc: '定义超链接地址',
      component: 'input',
      initialValue: 'https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/xlink:href',
    },
    {
      name: 'children',
      desc: '内容',
      component: 'input',
      initialValue: '这是一个跳转链接',
    },
  ],
};
