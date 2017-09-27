import React from 'react';
import { Container, Row, Col } from 'react-flexybox';
import Markdown from '../Markdown';
import flexCode from './flex.md';
import flexGutter from './flex-gutter.md';

const FlexExample = props => (
  <Container>
    <h2>Flex column sizes</h2>
    <p>
      React-flexybox uses a 12 column system. If any <code>Row</code> exceeds 12 columns, it will wrap
    </p>

    <p>Use <code>flex</code> by itself to set auto grow</p>

    <Row gutter={3}>
      <Col flex={1} className="demo-item" />
      <Col flex={1} className="demo-item" />
      <Col flex={1} className="demo-item" />
      <Col flex={1} className="demo-item" />
      <Col flex={1} className="demo-item" />
      <Col flex={1} className="demo-item" />
      <Col flex={1} className="demo-item" />
      <Col flex={1} className="demo-item" />
      <Col flex={1} className="demo-item" />
      <Col flex={1} className="demo-item" />
      <Col flex={1} className="demo-item" />
      <Col flex={1} className="demo-item" />

      <Col flex={1} className="demo-item" />
      <Col flex={10} className="demo-item" />
      <Col flex={1} className="demo-item" />

      <Col flex={2} className="demo-item" />
      <Col flex={2} className="demo-item" />
      <Col flex={2} className="demo-item" />
      <Col flex={2} className="demo-item" />
      <Col flex={2} className="demo-item" />
      <Col flex={2} className="demo-item" />

      <Col flex={1} className="demo-item" />
      <Col flex className="demo-item">variable width content table up remaining columnds</Col>
    </Row>

    <Row>
      <Col flex={12}>
        <Markdown markdown={flexCode} />
      </Col>
    </Row>

    <h2>Gutter Margins</h2>
    <p>
      By default there are no gutters on <code>Col</code> flex items.
      You can add a custom gutter on <code>Row</code> via the<code>gutter</code> property.
    </p>

    <Row className="row">
      <Col flex={3} className="demo-item border" />
      <Col flex={3} className="demo-item border" />
      <Col flex={3} className="demo-item border" />
      <Col flex={3} className="demo-item border" />
    </Row>

    <Row gutter={5} className="row">
      <Col flex={3} className="demo-item" />
      <Col flex={3} className="demo-item" />
      <Col flex={3} className="demo-item" />
      <Col flex={3} className="demo-item" />
    </Row>

    <Row gutter={15} className="row">
      <Col flex={3} className="demo-item" />
      <Col flex={3} className="demo-item" />
      <Col flex={3} className="demo-item" />
      <Col flex={3} className="demo-item" />
    </Row>

    <Row>
      <Col flex={12}>
        <Markdown markdown={flexGutter} />
      </Col>
    </Row>
  </Container>
);

export default FlexExample;
