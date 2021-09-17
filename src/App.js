import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Header from './Components/Header.js';
import Main from './Components/Main.js';
import Footer from './Components/Footer.js';
// import beastObj from './data.json';
import SelectedBeast from './Components/SelectedBeast.js';
import { Component } from 'react';


//implement modal here
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      SelectedBeast: {},
      showModal: false
    }
  }

  changeBeast = function(beast){
    this.setState({SelectedBeast: beast})
  }

  displayModal = function(){
    this.setState({showModal: true})
  }

  hideModal = function(){
    this.setState({showModal: false})
  }

  render() {
    return (
      <Container>
        <Header title = 'Horned Beasts!'/>
        <Main message='yo' beastObj={beastObj} />
        <Footer text = 'Jovincent Del Mundo'/>
        <SelectedBeast /> 
      </Container>
    );
  }
}

export default App;
