import React from 'react';
import { HeaderProps, HeaderTypes, DefaultHeaderProps } from './types';
import SzHeaderComponent from './szHeader';
import OldHeader from './oldHeader';

export const Header: React.FC<HeaderProps> = props => {
  switch (props.type) {
    case HeaderTypes.sz: {
      return <SzHeaderComponent />;
    }
    case HeaderTypes.old: {
      return <OldHeader {...props} />;
    }
    default: {
      return <OldHeader {...(props as DefaultHeaderProps)} />;
    }
  }
};

export default Header;
