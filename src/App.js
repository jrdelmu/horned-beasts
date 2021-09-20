import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Header from './Components/Header.js';
import Main from './Components/Main.js';
import Footer from './Components/Footer.js';
// import beastObj from './data.json';
import SelectedBeast from './Components/SelectedBeast.js';



//implement modal here
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectedBeast: {},
      showModal: false
    }
  }

  changeBeast = (beast) => {
    this.setState({ selectedBeast: beast })
  }

  showModal = () => {
    this.setState({ showModal: true })
  }

  hideModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <Container>
        <Header title = 'Horned Beasts!'/>
        <Main 
          changeBeast={this.changeBeast} 
          showModal={this.showModal} 
        />
        <Footer text = 'Jovincent Del Mundo'/>
        <SelectedBeast 
          beast={this.state.selectedBeast} 
          hideModal={this.hideModal} 
          showModal={this.state.showModal}
        />
      </Container>
    );
  }
}

export default App;
// <Main beastObj={beastObj} />