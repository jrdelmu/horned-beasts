import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class HornedBeasts extends Component {

  constructor(props){
    super(props)

    this.state = {
      likes:0,
      newSelectedBeast: null
    }
  }

  updateSelected = () => this.props.updateSelected(this.state.newSelectedBeast);

  handleClick = () => {
    this.props.changeBeast(this.props.beast);
    this.props.showModal();
  }

  handleVote = () => {
    //increment likes by 1
    this.setState({ likes: this.state.likes + 1 })
  }
  render(){
    return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" onClick={this.handleClick} src={this.props.beast.image_url} />
    <Card.Body>
      <Card.Title>{this.props.beast.title}</Card.Title>
      <Card.Text>
         {this.props.beast.description}
         <p>Horns: {this.props.beast.horns}</p>
         <h3>{this.state.likes}</h3>
      </Card.Text>
      <Button onClick={this.handleVote} variant="danger">{'<3 '}{this.state.votes}</Button>
    </Card.Body>
  </Card>
      )
    }
  }
  
  

  
