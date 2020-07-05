import React, { useState } from 'react';
import { Form, Button, Tooltip, message } from 'antd';
import { IComponentConfig } from '@/types';
import { getComponentByType, getComponentProps, formatKeyValueToStr } from './util';
import CopyToClipboard from 'react-copy-to-clipboard';

interface IPlaygroundProps {
  componentType: string;
  config: IComponentConfig;
  onChange: (props: Record<string, any>) => void;
}

export const getSVGComponent = (Component: React.FC) => (props: Record<string, any>) => {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <Component {...props} />
    </svg>
  );
};

export const renderExplainArea = (config: IComponentConfig) => {
  const content = config.properties.map((property, i) => {
    const { name, desc } = property;
    return (
      <p key={i}>
        <b>{name}：</b>
        {desc}
      </p>
    );
  });

  return <div style={{ background: '#ccc', padding: '10px 15px', borderRadius: 2 }}>{content}</div>;
};

export const Playground: React.FC<IPlaygroundProps> = ({ componentType, config, onChange }) => {
  const initialValues = React.useMemo(() => getComponentProps(config), [config]);
  const getSVGElementStr = (values: any) => {
    const hasChildrenElement = !!values.children;
    const content = hasChildrenElement
      ? `<${componentType} ${formatKeyValueToStr(values)}>${values.children}</${componentType}>`
      : `<${componentType} ${formatKeyValueToStr(values)} />`;
    return `<svg width="100%" height="100%"  xmlns="http://www.w3.org/2000/svg">${content}</svg>`;
  };
  const [svgElement, setSvgElement] = useState(getSVGElementStr(initialValues));
  const [form] = Form.useForm();

  const onReset = () => {
    onChange(initialValues);
    setSvgElement(getSVGElementStr(initialValues));
    form.resetFields();
  };

  // TODO Fixed any
  const onValuesChange = (changedValues: any, values: any) => {
    onChange(changedValues);
    setSvgElement(getSVGElementStr(values));
  };

  return (
    <div style={{ padding: 10 }}>
      <Form
        onValuesChange={onValuesChange}
        form={form}
        initialValues={initialValues}
        layout="vertical"
      >
        {config.properties.map((property, i) => {
          const { name, desc, component } = property;
          const Component = getComponentByType(component);
          const renderLabel = () => (
            <Tooltip title={desc} placement="left">
              <span>{`${name.charAt(0).toUpperCase()}${name.slice(1)}`}：</span>
            </Tooltip>
          );
          return (
            <Form.Item key={i} name={name} label={renderLabel()}>
              <Component />
            </Form.Item>
          );
        })}
        <Form.Item>
          <Button onClick={onReset} style={{ marginRight: 10 }}>
            重置
          </Button>
          <CopyToClipboard text={svgElement} onCopy={() => message.success('已复制到粘贴板')}>
            <Button type="primary">复制当前SVG</Button>
          </CopyToClipboard>
        </Form.Item>
      </Form>
    </div>
  );
};
