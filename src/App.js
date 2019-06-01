import React from 'react';
import './App.css';
import { Container, Form, InputGroup, FormControl, Row, Col, Carousel } from 'react-bootstrap';

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

      <div id="service">
      <h2>Service Quality</h2>
      <hr />
      </div>
      <div>
      <Row>
      <Col>
      <Col><p className="experience">How was your experience today?</p></Col>
      <Carousel>
      <Carousel.Item>
      <img
      className="d-block w-100" src="https://cdn.pixabay.com/photo/2012/03/01/00/57/background-19861_1280.jpg"
      alt="First slide"
      /> 
      <Carousel.Caption>
      <h3>Excellent</h3>
      </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1533035336122-4327d347d2fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      alt="Second slide"
      />

      <Carousel.Caption>
      <h3>Good</h3>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2012/12/24/08/39/backdrop-72250_1280.jpg"

      alt="Third slide"
      />
      <Carousel.Caption>
      <h3>Fair</h3>
      </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1538635546732-684a9ec39ea5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1070&q=80"
      alt="Fourth slide"
      />
      <Carousel.Caption>
      <h3>Poor</h3>
      </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      </Col>
      <Col id="tip">
      <Col><p>Tip%</p></Col><br />
      <Col>
      <div className="incrementor">
      <i class="fas fa-plus-square"></i>&nbsp;&nbsp;<span>10</span>&nbsp;&nbsp;
      <i class="fas fa-minus-square"></i>
      </div>
      </Col>
      </Col>
      </Row>
      </div>
      </Container>
    );
  }
}

export default App;
