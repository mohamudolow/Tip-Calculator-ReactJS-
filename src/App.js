import React from 'react';
import './App.css';
import { Container, Form, InputGroup, FormControl, Row, Col, Carousel } from 'react-bootstrap';

const slider = [
      {
        "src": "https://cdn.pixabay.com/photo/2012/03/01/00/57/background-19861_1280.jpg",
        "val": 35,
        "experience": "Excellent"
      },
          {
        "src": "https://images.unsplash.com/photo-1533035336122-4327d347d2fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "val": 25,
        "experience": "Good"
      },
          {
        "src": "https://cdn.pixabay.com/photo/2012/12/24/08/39/backdrop-72250_1280.jpg",
        "val": 15,
        "experience": "Fair"
      },
          {
        "src": "https://images.unsplash.com/photo-1538635546732-684a9ec39ea5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1070&q=80",
        "val": 5,
        "experience": "Poor"
      }
    ];

class PersonIncrementor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="incrementor">
      <i className="fas fa-user-times" onClick={()=> this.props.handleIncrement('numOfPeople', -1)}></i>&nbsp;&nbsp;
<span>{this.props.numOfPeople}</span>&nbsp;&nbsp;
<i className="fas fa-user-plus" onClick={()=> this.props.handleIncrement('numOfPeople', 1)}></i></div>
  );
}
}


const Bill = (props) => {
  return (
    <div className="bill">
    <Form>
    <Row>
    <Col><Form.Label>Bill</Form.Label></Col>
    <Col>
    <p>Number of people</p>
    </Col>
    </Row>
    <Row>
    <Col>
    <InputGroup className="input1">
    <InputGroup.Prepend>
    <InputGroup.Text>$</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl arai-label="Amount (to the nearest two decimal places)" value={props.bill} onChange={props.handleChange}/>
    </InputGroup>
    </Col>
    <Col>
    <PersonIncrementor numOfPeople={props.numOfPeople} handleIncrement={props.handleIncrement}/>
    </Col>
    </Row>
    </Form>
    </div>
  );
}


class ServiceQuality extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Carousel>
      {slider.map(e => (
      <Carousel.Item key={e.id}>
            <img src={e.src} alt="slider background image"  /> 
          <Carousel.Caption>
      <InputGroup>
      <InputGroup.Prepend>
      &nbsp;&nbsp;
      
<InputGroup.Radio aria-label="radio button for following h3 text" id={e.experience} value={e.experience} name="experience" onClick={() => this.props.service('tip', e.val)}/>
      </InputGroup.Prepend> &nbsp;&nbsp;
<label for={e.experience}>{e.experience}</label>
      </InputGroup>
      
</Carousel.Caption>
</Carousel.Item>
      ))}
      </Carousel>
);
}
};


class TipIncrementor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="incrementor">
      <i className="fas fa-minus-square" onClick={() => this.props.handleIncrement('tip', -1)}></i>&nbsp;&nbsp;
<span>{this.props.tip}</span>&nbsp;&nbsp;
<i className="fas fa-plus-square" onClick={()=> this.props.handleIncrement('tip', 1)}></i>
</div>
);
}
};


const Result = (props) => {
  const ITWithoutTip = Math.round((props.bill/props.numOfPeople)*100)/100;
  const ITWithTip = Math.round((ITWithoutTip + (props.tip/100 * props.bill/props.numOfPeople)) * 100)/100;
  const tipTotal = Math.round((ITWithTip -ITWithoutTip) * props.numOfPeople *100)/100;
  const tipPerPerson = Math.round(tipTotal / props.numOfPeople * 100)/100;

  return (
    <div id="result">
    <Container>
    <Row>
    <Col>Individual total without tip:</Col>
    <Col className="num">{ITWithoutTip}</Col>
    </Row>

    <Row>
    <Col>Individual total with tip:</Col>
    <Col className="num">{ITWithTip}</Col>
    </Row>

    <Row>
    <Col>Total tip amount:</Col>
    <Col className="num">{tipTotal}</Col>
    </Row>
    </Container><br />

    <div id="tip-per-person">
    <Container>
    <Row>
    <Col className="tip-per-person-text">Tip per person:</Col>
    <Col className="num">{tipPerPerson}</Col>
    </Row>
    </Container>
    </div>
    </div>
  );
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bill: 112.58,
      tip: 20,
      numOfPeople: 2
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.service = this.service.bind(this);
  }

  handleChange(event) {
    this.setState({
      bill: event.target.value
    })
  }

  handleIncrement(count, value) {
    this.setState(prevState => {
      if(prevState[count] > 1 || value === 1) {
        return ({
          [count]: prevState[count] + value
        });
      } else {
        return ({
          [count]: 20
        });
      }
    });
  }

  service(name, value) {
    this.setState({
      [name]: value
    });
  }

  render () {
    return (
      <div id="container">

      <div id="header">
      <Container>
      <h1>Tip Calculator</h1>
      </Container>
      </div>

      <div id="main">
      <Container>
      <Bill bill={this.state.bill} numOfPeople={this.state.numOfPeople} handleChange={this.handleChange} handleIncrement={this.handleIncrement}/>


      <div id="service">
      <hr />
      </div>
      <div>
      <Row>
      <Col>
      <Col>
      <p className="experience">How was your experience today?</p>
      </Col>

      <ServiceQuality service={this.service}/>

      </Col>
      <Col id="tip">
      <Col><p>Tip %</p></Col><br />
      <Col>

      <TipIncrementor handleIncrement={this.handleIncrement} tip={this.state.tip} />

      </Col>
      </Col>
      </Row>
      </div>
      <hr />
      </Container>

      <Result bill={this.state.bill} numOfPeople={this.state.numOfPeople} tip={this.state.tip} />
      </div>
      </div>
    );
  }
};

export default App;
