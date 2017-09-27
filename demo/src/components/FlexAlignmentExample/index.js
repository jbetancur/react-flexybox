import React from 'react';
import { Container, Row, Col } from 'react-flexybox';
import Markdown from '../Markdown';
import alignDefault from './align-default.md';
import alignCenter from './align-center.md';
import alignBottom from './align-bottom.md';
import alignSpace from './align-space.md';
import alignSelf from './align-self.md';

const FlexAlignmentExample = props => (
  <Container>
    <h2>Default alignment</h2>
    <p>
      Flex alignments default to the flexbox spec. If you want to center horizontally just add <code>justifyContent="center"</code>
    </p>

    <Row gutter={3} className="row tall">
      <Col flex={3} className="demo-item" />
      <Col flex={3} className="demo-item" />
      <Col flex={3} className="demo-item" />
    </Row>

    <Row>
      <Col flex={12}>
        <Markdown markdown={alignDefault} />
      </Col>
    </Row>

    <h2>Center alignment shortcut - verically and horizontally</h2>
    <p>
      To center flex items both verically and horizontally you can use <code>center</code> shortcut
      <code>center</code> is the equivalent of <code>alignItems="center"</code> <code>justifyContent="center"</code>
    </p>

    <Row gutter={3} center className="row tall">
      <Col flex={3} className="demo-item" />
      <Col flex={3} className="demo-item" />
      <Col flex={3} className="demo-item" />
    </Row>

    <Row>
      <Col flex={12}>
        <Markdown markdown={alignCenter} />
      </Col>
    </Row>

    <h2>Bottom alignment</h2>
    <p>
      You can align flex items to the bottom of the <code>Row</code>. If you want to center horizontally just add <code>justifyContent="center"</code>
    </p>

    <Row gutter={3} alignItems="flex-end" className="row tall">
      <Col flex={3} className="demo-item" />
      <Col flex={3} className="demo-item" />
      <Col flex={3} className="demo-item" />
    </Row>

    <Row>
      <Col flex={12}>
        <Markdown markdown={alignBottom} />
      </Col>
    </Row>

    <h2>space-between center alignment</h2>
    <p>
      Here we use a combo of <code>justifyContent="space-between"</code> and <code>alignItems="center"</code>
    </p>

    <Row gutter={3} justifyContent="space-between" alignItems="center" className="row tall">
      <Col flex={3} className="demo-item" />
      <Col flex={3} className="demo-item" />
      <Col flex={3} className="demo-item" />
    </Row>

    <Row>
      <Col flex={12}>
        <Markdown markdown={alignSpace} />
      </Col>
    </Row>

    <h2>Alignment self</h2>
    <p>
      We can specity <code>alignSelf</code> for each flex item in a <code>Row</code>
    </p>

    <Row gutter={3} className="row tall">
      <Col flex={4} className="demo-item" />
      <Col flex={4} alignSelf="center" className="demo-item" />
      <Col flex={4} alignSelf="flex-end" className="demo-item" />
    </Row>

    <Row>
      <Col flex={12}>
        <Markdown markdown={alignSelf} />
      </Col>
    </Row>
  </Container>
);

export default FlexAlignmentExample;
