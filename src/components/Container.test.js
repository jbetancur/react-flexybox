import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { mount } from 'enzyme';
import Container from './Container';

describe('Container', () => {
  test('it mounts <Container />', () => {
    const wrapper = mount(<Container />);

    expect(wrapper).toMatchSnapshot();
  });

  test('it mounts <Container fluid />', () => {
    const tree = renderer.create(<Container
      fluid
      className="rick-morty"
      style={{ color: 'purple' }}
    />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('it mounts <Container component="span" />', () => {
    const wrapper = mount(<Container component="span" />);

    expect(wrapper).toMatchSnapshot();
  });

  test('it overrides the default component as a component', () => {
    const Faux = () => <div />;
    const wrapper = mount(<Container component={Faux} />);

    expect(wrapper).toMatchSnapshot();
  });
});
