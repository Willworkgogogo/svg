import { Input, InputNumber, Slider, Switch } from 'antd';
import ReactColor from '../react-color';
import { IComponentConfig, ComponentType } from '@/types';

export function getComponentProps(config: IComponentConfig) {
  return config.properties.reduce<Record<string, any>>((pre, property) => {
    pre[property.name] = property.initialValue;
    return pre;
  }, {});
}

// TODO FIXED any
const componentMap = new Map<string, any>();
componentMap.set('input', Input);
componentMap.set('number', InputNumber);
componentMap.set('slider', Slider);
componentMap.set('switch', Switch);
componentMap.set('color', ReactColor);

export function getComponentByType(type: ComponentType) {
  const Component = componentMap.get(type);
  if (Component) return Component;
  throw new Error('the component type is invalid');
}

export function formatKeyValueToStr(values: Record<string, any>) {
  return Object.keys(values)
    .filter(key => key !== 'children')
    .map(key => `${key}="${values[key]}"`)
    .join(' ');
}
