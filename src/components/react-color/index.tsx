import React, { Ref } from 'react';
import { CirclePicker, ColorResult } from 'react-color';

interface IReactColor {
  value: string;
  onChange: (color: string) => void;
}

const ReactColor = React.forwardRef<CirclePicker, IReactColor>(({ value, onChange }, ref) => {
  const onColorChange = (color: ColorResult) => {
    onChange && onChange(color.hex);
  };

  return (
    <CirclePicker ref={ref} color={value} onChange={onColorChange} circleSize={20} width="300" />
  );
});

export default ReactColor;
