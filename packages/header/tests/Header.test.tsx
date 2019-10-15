/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '@im-ui/theme';
import BrandingLogo from '@im-ui/branding-logo';
import Header from '../src';

describe('Header', () => {
  it('default', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Header
          onTheLeft={<BrandingLogo brandingHolder="Instamotion" link="/" />}
          inTheMiddle={<div> Some contacts </div>}
          onTheRight={<BrandingLogo brandingHolder="Allianz" link="/" />}
        />
      </ThemeProvider>
    );

    expect(wrapper.find(BrandingLogo).length).toEqual(2);
  });
});
