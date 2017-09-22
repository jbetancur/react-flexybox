import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { mount } from 'enzyme';
import Col from './Col';

describe('Col', () => {
  test('it mounts <Col />', () => {
    const wrapper = mount(<Col />);

    expect(wrapper).toMatchSnapshot();
  });

  test('it mounts Col with flex: auto', () => {
    const tree = renderer.create(<Col
      flex
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('it overrides Col flex when xs', () => {
    const tree = renderer.create(<Col
      flex={6}
      xs={12}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('it sets size props', () => {
    const tree = renderer.create(<Col
      xs={12}
      sm={6}
      md={3}
      lg={1}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('it mounts Col with debug prop', () => {
    const tree = renderer.create(<Col
      debug
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('it overrides default Col minWidth with minWidth prop', () => {
    const tree = renderer.create(<Col
      flex={12}
      minWidth={42}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('it mounts <Col component="span" />', () => {
    const wrapper = mount(<Col component="span" />);

    expect(wrapper).toMatchSnapshot();
  });

  test('it overrides the default component as a component', () => {
    const Faux = () => <div />;
    const wrapper = mount(<Col component={Faux} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('it renders children', () => {
    const wrapper = mount(<Col><section /></Col>);

    expect(wrapper).toMatchSnapshot();
  });
});
