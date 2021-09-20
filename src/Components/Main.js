import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import beastObj from '../data.json';
import HornedBeasts from './HornedBeasts';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  };

  render(){

    return (

      <Container fluid>
        <Row xs={1} sm={2} md={3} lg={4}>
          {beastObj.map(beast => (
            <HornedBeasts 
              key={beast.title} 
              beast={beast} 
              changeBeast={this.props.changeBeast} 
              showModal={this.props.showModal}
            />))}
        </Row>
      </Container>
    );
  }
}



