import React from 'react';
import { render } from 'react-testing-library';
import 'jest-styled-components';
import Container from './Container';

describe('Container', () => {
  test('it mounts <Container />', () => {
    const { container } = render(<Container />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('it mounts <Container fluid />', () => {
    const { container } = render(
      <Container
        fluid
        className="rick-morty"
        style={{ color: 'purple' }}
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('it mounts <Container component="span" />', () => {
    const { container } = render(
      <Container
        component="span"
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('it overrides the default component as a component', () => {
    const Faux = () => <div />;
    const { container } = render(
      <Container
        component={Faux}
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
