import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';



export default class SelectedBeast extends Component{
  render () {
    return (

      <Modal show={this.props.showModal} onHide={this.props.hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Horned Beasts</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Card>
            <Card.Img variant="top" src={this.props.beast.image_url} alt={this.props.beast.description} />
            <Card.Body>
              <Card.Title>{this.props.beast.title}</Card.Title>
              <Card.Text>
                {this.props.beast.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    )
  }
}

// <Card style={{ width: "35rem" }}>
// <Card.Img variant="top" src={this.props.data.image_url} />
// <Card.Body>
//   <Card.Title>{this.props.data.title}</Card.Title>
//   <Card.Text>{this.props.data.description}</Card.Text>
// </Card.Body>
// </Card>