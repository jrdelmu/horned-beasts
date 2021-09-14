import { Component } from 'react';

class Main extends Component {
  render(){
    return (
      <div>
        <h1>Beasts: {this.props.message}</h1>
        <HornedBeast 
        title={'Ram'}
        imgUrl={'https://berryhillranch.com/wp-content/uploads/2019/05/Hawaiian_Black_Sheep-square-300x300.jpg'}
        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum iaculis eu non diam phasellus vestibulum. Mattis aliquam faucibus purus in massa tempor nec feugiat.'}
        />
        <HornedBeast 
        title={'Bull'}
        imgUrl={'https://s3-us-west-2.amazonaws.com/theathletic-team-logos/team-logo-73-300x300.png'}
        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat imperdiet sed euismod nisi porta lorem mollis. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero.'}
        />
      </div>
    )
  }
}

class HornedBeast extends Component{
  render(){
    return (
      <div>
         <h2> {this.props.title} </h2> 
         <img src ={this.props.imgUrl} />
         <p>{this.props.description}</p>
      </div>
    )
  }
}


export default Main;

