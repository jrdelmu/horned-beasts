import { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'

class Main extends Component {
  render(){

    const objs = this.props.beastObj;

    return (
      // <div>
      //   <h1>Beasts: {this.props.message}</h1>
      //   <HornedBeast 
      //   title={'Ram'}
      //   imgUrl={'https://berryhillranch.com/wp-content/uploads/2019/05/Hawaiian_Black_Sheep-square-300x300.jpg'}
      //   description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum iaculis eu non diam phasellus vestibulum. Mattis aliquam faucibus purus in massa tempor nec feugiat.'}
      //   />
      //   <HornedBeast 
      //   title={'Bull'}
      //   imgUrl={'https://s3-us-west-2.amazonaws.com/theathletic-team-logos/team-logo-73-300x300.png'}
      //   description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat imperdiet sed euismod nisi porta lorem mollis. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero.'}
      //   />
      // </div>
      <Container>
        <Row>
          <Col><HornedBeast obj={objs[0]} /></Col>
          <Col><HornedBeast obj={objs[1]} /></Col>
          <Col><HornedBeast obj={objs[2]} /></Col>
        </Row>
        <Row>
          <Col><HornedBeast obj={objs[3]} /></Col>
          <Col><HornedBeast obj={objs[4]} /></Col>
          <Col><HornedBeast obj={objs[5]} /></Col>
        </Row>
      </Container>
    );
  }
}

class HornedBeast extends Component{

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
      // <div>
      //    <h2> {this.props.title} </h2> 
      //    <img src ={this.props.imgUrl} />
      //    <p>{this.props.description}</p>
      // </div>

      // <div>
      //   <Image src = {this.props.obj.image_url} rounded fluid />
      // </div>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" onClick={this.handleClick} src={this.props.obj.image_url} />
  <Card.Body>
    <Card.Title>{this.props.obj.title}</Card.Title>
    <Card.Text>
       {this.props.obj.description}
       <h3>{this.state.likes}</h3>
    </Card.Text>
  </Card.Body>
</Card>
    )
  }
}


export default Main;

