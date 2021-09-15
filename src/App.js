import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
// import { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js'
import Main from './Main.js'
import beastObj from './data.json'

function App() {
  return (
    <Container>
      <Header title = 'Horned Beasts!'/>
      <Main message='yo' beastObj={beastObj} />
      <Footer text = 'Jovincent Del Mundo'/>
    </Container>
  );
}


export default App;
