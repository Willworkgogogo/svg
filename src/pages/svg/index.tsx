import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import { useLocation } from 'umi';

import { getSVGComponent, renderExplainArea, Playground } from '@/components/renders/svg-render';
import { getComponentProps } from '@/components/renders/util';
import { IComponentConfig } from '@/types';
import styles from './index.less';

export default () => {
  const history = useLocation();
  // TODO Fixed me, it's bad
  const [group, type] = location.pathname.replace('/svg/', '').split('/');
  const config: IComponentConfig = require(`../../components/svg/${group}/${type}`);
  const initComponentProps = getComponentProps(config);
  const [componentProps, setComponentProps] = useState(initComponentProps);
  // TODO Fixed props property 带中划线的需要格式化成驼峰
  const SVGComponent = getSVGComponent(props => React.createElement(type, props, props.children));

  useEffect(() => {
    setComponentProps(getComponentProps(config));
  }, [config]);

  const onPlaygroundChange = (changedProp: Record<string, any>) => {
    setComponentProps({ ...componentProps, ...changedProp });
  };

  return (
    <Layout>
      <Layout.Header>
        <h1 className={styles.title}>{config.title}</h1>
        <span className={styles.subTitle}>{config.subTitle}</span>
      </Layout.Header>
      <Layout>
        <Layout>
          <Layout.Footer style={{ padding: 0 }}>{renderExplainArea(config)}</Layout.Footer>
          <Layout.Content style={{ minHeight: 700 }}>
            <SVGComponent {...componentProps} />
          </Layout.Content>
        </Layout>
        <Layout.Sider theme="light" width={300}>
          <Playground config={config} onChange={onPlaygroundChange} componentType={type} />
        </Layout.Sider>
      </Layout>
    </Layout>
  );
};
