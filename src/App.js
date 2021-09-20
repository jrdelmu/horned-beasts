import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Header from './Components/Header.js';
import HornChoices from './Components/Form.js';
import Main from './Components/Main.js';
import Footer from './Components/Footer.js';
import beastObj from './data.json';
import SelectedBeast from './Components/SelectedBeast.js';



//implement modal here
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectedBeast: {},
      showModal: false,
      renderChoices: beastObj
    }
  }

  handleSelect = (choice) => {

    // if(choice === '1'){
    //   choices = beastObj.filter(beast => (beast.horns === 1))
    // }
    // else if(choice === '2'){
    //   choices = beastObj.filter(beast => (beast.horns === 2))
    // }
    // else if(choice === '3'){
    //   choices = beastObj.filter(beast => (beast.horns === 3))
    // }
    // else if(choice === '100'){
    //   choices = beastObj.filter(beast => (beast.horns === 100))
    // }

    let allBeasts = beastObj;
    if(choice){
      allBeasts = beastObj.filter(beast => beast.horns === choice);
    }
    console.log(allBeasts)
    this.setState({renderChoices: allBeasts})
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
        <HornChoices onSelect={this.handleSelect}/>
        <Main 
          beastObj={this.state.renderChoices}
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