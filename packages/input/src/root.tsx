/* istanbul ignore file */
import React, { useMemo } from 'react';
import { Input, InputProps } from './input';
import Phone from './phone';

export const Selector: React.FC<InputProps> = (props: InputProps) => {
  const isPhone = useMemo(() => props.type === 'tel', [props.type]);

  return isPhone ? <Phone {...props} /> : <Input {...props} />;
};

export default Selector;
