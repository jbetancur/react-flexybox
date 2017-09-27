import React from 'react';
import { Container, Row, Col } from 'react-flexybox';
import Markdown from '../Markdown';
import code from './code.md';

const APIExample = props => (
  <Container>
    <h2>API</h2>

    <Row>
      <Col flex={12}>
        <Markdown markdown={code} />
      </Col>
    </Row>
  </Container>
);

export default APIExample;
