import React from 'react';
import { Container, Row, Col } from 'react-flexybox';
import Markdown from '../Markdown';
import code from './code.md';

const ContainerExample = props => (
  <div>
    <Container>
      <h2>Container</h2>
      <p>
        Container is an optional Wrapper that centers all flex items within <code>Row</code> to a fixed width.
      </p>

      <Row gutter={3}>
        <Col flex={6} className="demo-item" />
        <Col flex={6} className="demo-item" />
        <Col flex={6} className="demo-item" />
        <Col flex={6} className="demo-item" />
      </Row>
    </Container>

    <p>
      Using the <code>fluid</code> prop makes the contents of <code>Row</code> 100% width of the browser window
    </p>

    <Container fluid>
      <Row gutter={3}>
        <Col flex={6} className="demo-item" />
        <Col flex={6} className="demo-item" />
        <Col flex={6} className="demo-item" />
        <Col flex={6} className="demo-item" />
      </Row>

      <Row>
        <Col flex={12}>
          <Markdown markdown={code} />
        </Col>
      </Row>
    </Container>
  </div>
);

export default ContainerExample;
