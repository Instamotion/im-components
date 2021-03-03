import React from 'react';
import { HeaderTypes, DefaultHeaderProps, HeaderProps } from './helpers/types';
import SzHeaderComponent from './szHeader';
import Header from './default';

const ImHeaderComponent: React.FC<HeaderProps> = props => {
  switch (props.type) {
    case HeaderTypes.sz: {
      return <SzHeaderComponent />;
    }
    case HeaderTypes.new:
    default: {
      return <Header {...(props as DefaultHeaderProps & HeaderProps)} />;
    }
  }
};

export default ImHeaderComponent;
