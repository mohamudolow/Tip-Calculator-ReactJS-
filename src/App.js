import React from 'react';
import './App.css';
import { Container, Form, InputGroup, FormControl, Row, Col } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <Container>
      
      <div className="header">
      <h1>Tip Calculator</h1>
      </div>
      
      <div className="bill">
      <Form>
      <Form.Label>Bill</Form.Label>
      <Row>
      <Col>
      <InputGroup className="input1">
      <InputGroup.Prepend>
      <InputGroup.Text>$</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl arai-label="Amount (to the nearest two decimal places)" />
      </InputGroup>
      </Col>
      <Col><div className="incrementor"><i class="fas fa-user-times"></i>&nbsp;&nbsp;<span>2</span>&nbsp;&nbsp;<i class="fas fa-user-plus"></i></div></Col>
      </Row>
      </Form>
      </div>
      
      
      </Container>
    );
  }
}

export default App;
