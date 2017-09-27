import React from 'react';
import { Container, Row, Col } from 'react-flexybox';
import Markdown from '../Markdown';
import code from './code.md';

const FlexResponsiveExample = props => (
  <Container>
    <h2>Responsive Sizing</h2>
    <p>
      You can use flex together with <code>xs, sm, md, lg</code> to override the default flex
    </p>

    <Row gutter={3}>
      <Col flex={3} xs={12} sm={2} md={6} className="demo-item" />
      <Col flex={3} xs={12} sm={4} md={6} className="demo-item" />
      <Col flex={3} xs={12} sm={4} md={6} className="demo-item" />
      <Col flex={3} xs={12} sm={2} md={6} className="demo-item" />
    </Row>

    <Row>
      <Col flex={12}>
        <Markdown markdown={code} />
      </Col>
    </Row>
  </Container>
);

export default FlexResponsiveExample;
