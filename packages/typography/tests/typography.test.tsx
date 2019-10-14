/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import theme from '@instamotion/theme';
import {Heading, Text, Link} from '../src';

describe('Heading component', () => {
  it('renders a h1', () => {
    const wrapper = mount(
      <Heading theme={theme} size="xxl">
        Test
      </Heading>
    );

    expect(wrapper.find('h1').text()).toEqual('Test');
  });

  it('renders a h2', () => {
    const wrapper = mount(
      <Heading theme={theme} size="xl">
        Test
      </Heading>
    );

    expect(wrapper.find('h2').text()).toEqual('Test');
  });

  it('renders a h3', () => {
    const wrapper = mount(
      <Heading theme={theme} size="l">
        Test
      </Heading>
    );

    expect(wrapper.find('h3').text()).toEqual('Test');
  });

  it('renders a h4', () => {
    const wrapper = mount(
      <Heading theme={theme} size="m">
        Test
      </Heading>
    );

    expect(wrapper.find('h4').text()).toEqual('Test');
  });

  it('renders a h5', () => {
    const wrapper = mount(
      <Heading theme={theme} size="s">
        Test
      </Heading>
    );

    expect(wrapper.find('h5').text()).toEqual('Test');
  });

  it('renders a h6', () => {
    const wrapper = mount(
      <Heading theme={theme} size="xs">
        Test
      </Heading>
    );

    expect(wrapper.find('h6').text()).toEqual('Test');
  });

  it('renders a h6', () => {
    const wrapper = mount(
      <Heading theme={theme} size="xxs">
        Test
      </Heading>
    );

    expect(wrapper.find('h6').text()).toEqual('Test');
  });
});

describe('Text component', () => {
  it('renders a p', () => {
    const wrapper = mount(<Text theme={theme}>Test</Text>);

    expect(wrapper.find('p').text()).toEqual('Test');
  });

  it('renders a span', () => {
    const wrapper = mount(
      <Text theme={theme} tag="span">
        Test
      </Text>
    );

    expect(wrapper.find('span').text()).toEqual('Test');
  });
});

describe('Link component', () => {
  it('renders a link', () => {
    const wrapper = mount(
      <Link theme={theme} href="http://example.com">
        Test
      </Link>
    );

    expect(wrapper.find('a').text()).toEqual('Test');
  });
});
