import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { mount } from 'enzyme';
import Row from './Row';
import Col from './Col';

describe('Row', () => {
  test('it mounts <Row />', () => {
    const wrapper = mount(<Row />);

    expect(wrapper).toMatchSnapshot();
  });

  test('it mounts Row with props', () => {
    const tree = renderer.create(<Row
      paddingTop="1em"
      paddingLeft="1em"
      paddingBottom="1em"
      paddingRight="1em"
      padding="1em"
      height="100px"
      className="rick-morty"
      style={{ color: 'purple' }}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('it mounts Row and passes with debug prop to Col', () => {
    const wrapper = mount(<Row debug><Col /></Row>);

    expect(wrapper).toMatchSnapshot();
  });

  test('it mounts Row with shortcut props', () => {
    const tree = renderer.create(<Row
      fill
      center
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('it mounts Row with shortcut prop fill and overrides height if set', () => {
    const tree = renderer.create(<Row
      height="10px"
      fill
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('it mounts Row with shortcut prop padding and overrides padding<direction> if set', () => {
    const tree = renderer.create(<Row
      paddingTop="1em"
      paddingLeft="1em"
      paddingBottom="1em"
      paddingRight="1em"
      padding="0 1px 2px 0"
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('it mounts <Row component="span" />', () => {
    const wrapper = mount(<Row component="span" />);

    expect(wrapper).toMatchSnapshot();
  });

  test('it overrides the default component as a component', () => {
    const Faux = () => <div />;
    const wrapper = mount(<Row component={Faux} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('it passes props down to a child that is a <Col />', () => {
    const wrapper = mount(<Row><Col /></Row>);

    expect(wrapper).toMatchSnapshot();
  });

  test('it passes props down to a child that is NOT <Col />', () => {
    const wrapper = mount(<Row><section /></Row>);

    expect(wrapper).toMatchSnapshot();
  });
});
