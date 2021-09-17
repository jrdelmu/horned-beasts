import React, { Component } from "react"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class HornedBeasts extends Component {
  constructor(props){
    super(props)

    this.state = {
      likes:0
    }
  }

  handleClick = () => {
    //increment likes by 1
    this.setState({ likes: this.state.likes + 1 })
  }
  render(){
    return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" onClick={this.handleClick} src={this.props.image_url} />
    <Card.Body>
      <Card.Title>{this.props.title}</Card.Title>
      <Card.Text>
         {this.props.description}
         <h3>{this.state.likes}</h3>
      </Card.Text>
      <Button onClick={this.handleClick} variant="danger">{'<3 '}{this.state.votes}</Button>
    </Card.Body>
  </Card>
      )
    }
  }
  
  

  
