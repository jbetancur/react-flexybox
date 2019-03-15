import React from 'react';
import { Container, Row, Col } from 'react-flexybox';
import logo from './logo.svg';
import './App.css';
import FlexExample from './components/FlexExample';
import FlexResponsiveExample from './components/FlexResponsiveExample';
import FlexLayoutExample from './components/FlexLayoutExample';
import FlexAlignmentExample from './components/FlexAlignmentExample';
import DebugExample from './components/DebugExample';
import ContainerExample from './components/ContainerExample';

const App = () => (
  <Container fluid>
    <Row center className="App-header">
      <Col flex={12}>
        <img src={logo} className="App-logo" alt="logo" />
      </Col>
      <Col flex={12}>
        <h1 className="App-title">react-flexybox</h1>
        <a className="button" href="https://github.com/jbetancur/react-flexybox">Github</a>
      </Col>
    </Row>

    <FlexExample />
    <FlexResponsiveExample />
    <FlexLayoutExample />
    <FlexAlignmentExample />
    <ContainerExample />
    <DebugExample />

  </Container>
);

export default App;
