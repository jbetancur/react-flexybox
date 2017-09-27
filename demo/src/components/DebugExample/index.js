import React from 'react';
import { Container, Row, Col } from 'react-flexybox';
import Markdown from '../Markdown';
import code from './code.md';

const DebugExample = props => (
  <Container>
    <h2>Debug</h2>
    <p>
      Debug can be helpful as you compose or troubleshoot your react-flexybox layouts
    </p>

    <Row debug>
      <Col flex={3} className="demo-item debug" />
      <Col flex={3} className="demo-item debug" />
      <Col flex={3} className="demo-item debug" />
      <Col flex={3} className="demo-item debug" />
      <Col flex={12} className="demo-item debug" />
      <Col flex={6} className="demo-item debug" />
      <Col flex={6} className="demo-item debug" />
      <Col flex className="demo-item debug" />
    </Row>

    <Row>
      <Col flex={12}>
        <Markdown markdown={code} />
      </Col>
    </Row>
  </Container>
);

export default DebugExample;
