import React from 'react';
import { HeaderProps, HeaderTypes, DefaultHeaderProps, NewHeaderProps } from './types';
import SzHeaderComponent from './szHeader';
import OldHeader from './oldHeader';
import NewHeader from './newHeader';

export const Header: React.FC<HeaderProps> = props => {
  switch (props.type) {
    case HeaderTypes.sz: {
      return <SzHeaderComponent />;
    }
    case HeaderTypes.old: {
      return <OldHeader {...props} />;
    }
    case HeaderTypes.new:
    default: {
      return <NewHeader {...(props as DefaultHeaderProps & NewHeaderProps)} />;
    }
  }
};

export default Header;
