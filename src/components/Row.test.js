import React from 'react';
import { render } from 'react-testing-library';
import 'jest-styled-components';
import Row from './Row';
import Col from './Col';

describe('Row', () => {
  test('it mounts <Row />', () => {
    const { container } = render(<Row />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('it mounts Row with props', () => {
    const { container } = render(
      <Row
        paddingTop="1em"
        paddingLeft="1em"
        paddingBottom="1em"
        paddingRight="1em"
        padding="1em"
        height="100px"
        className="rick-morty"
        style={{ color: 'purple' }}
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('it mounts Row and passes with debug prop to Col', () => {
    const { container } = render(
      <Row
        debug
      >
        <Col />
      </Row>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('it mounts Row with shortcut props', () => {
    const { container } = render(
      <Row
        fill
        center
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('it mounts Row with shortcut prop fill and overrides height if set', () => {
    const { container } = render(
      <Row
        height="10px"
        fill
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('it mounts Row with shortcut prop padding and overrides padding<direction> if set', () => {
    const { container } = render(
      <Row
        paddingTop="1em"
        paddingLeft="1em"
        paddingBottom="1em"
        paddingRight="1em"
        padding="0 1px 2px 0"
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('it mounts <Row component="span" />', () => {
    const { container } = render(
      <Row component="span" />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('it overrides the default component as a component', () => {
    const Faux = () => <div />;
    const { container } = render(
      <Row component={Faux} />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('it passes props down to a child that is a <Col />', () => {
    const { container } = render(
      <Row>
        <Col />
      </Row>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('it passes props down to a child that is NOT <Col />', () => {
    const { container } = render(
      <Row>
        <section>test</section>
      </Row>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
