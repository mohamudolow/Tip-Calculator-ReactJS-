import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <Container>
      <h1>Tip Calculator</h1>
      </Container>
    );
  }
}

export default App;
