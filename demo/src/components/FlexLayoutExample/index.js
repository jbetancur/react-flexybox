import React from 'react';
import { Container, Row, Col } from 'react-flexybox';
import Markdown from '../Markdown';
import code from './code.md';
import fill from './fill.md';

const FlexLayoutExample = props => (
  <Container>
    <h2>Flex for page layouts</h2>
    <p>
      React-flexybox is easy to use for web layouts across all screen sizes
    </p>

    <Row>
      <Col flex={12} xs={12} className="layout-item">
        header
      </Col>
      <Col flex={2} xs={12} className="layout-item tall">
        aside 1
      </Col>
      <Col flex={8} xs={12} className="layout-item tall">
        content
      </Col>
      <Col flex={2} xs={12} className="layout-item tall">
        aside 2
      </Col>
      <Col flex={12} xs={12} className="layout-item">
        footer
      </Col>
    </Row>

    <Row>
      <Col flex={12}>
        <Markdown markdown={code} />
      </Col>
    </Row>

    <h2>Fill shortcut</h2>
    <p>
      The full shortcut is useful if you want to fill a Row to 100% of the contaning element
    </p>
    <div style={{ height: '8em' }}>
      <Row gutter={3} fill className="row">
        <Col flex={3} className="demo-item" />
        <Col flex={3} className="demo-item" />
        <Col flex={3} className="demo-item" />
      </Row>
      <div style={{ marginTop: '-3em', textAlign: 'center' }} >filled 100% of parent height</div>
    </div>
    <Row>
      <Col flex={12}>
        <Markdown markdown={fill} />
      </Col>
    </Row>
  </Container>
);

export default FlexLayoutExample;
