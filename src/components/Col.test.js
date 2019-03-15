import React from 'react';
import { render } from 'react-testing-library';
import 'jest-styled-components';
import Col from './Col';

describe('Col', () => {
  test('it mounts <Col />', () => {
    const { container } = render(<Col />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('it mounts Col with flex: auto', () => {
    const { container } = render(<Col flex />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('it overrides Col flex when xs', () => {
    const { container } = render(<Col flex={6} xs={12} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('it sets size props', () => {
    const { container } = render(
      <Col
        xs={12}
        sm={6}
        md={3}
        lg={1}
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('it overrides default Col minWidth with minWidth prop', () => {
    const { container } = render(
      <Col
        flex={12}
        minWidth={42}
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('it mounts <Col component="span" />', () => {
    const { container } = render(
      <Col component="span" />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('it overrides the default component as a component', () => {
    const Faux = () => <div />;
    const { container } = render(
      <Col component={Faux} />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('it renders children', () => {
    const { container } = render(
      <Col><section>stuff</section></Col>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
