import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';

class HornChoices extends Component{
  
  handleChange = (event) => {
    const selection = parseInt(event.target.value);
    this.props.onSelect(selection);
  }
  render(){
    return(
      <Form>
        <Form.Select onChange={this.handleChange}>
        <option value=''>All</option>
        <option value='1'>One</option>
        <option value='2'>Two</option>
        <option value='3'>Three</option>
        <option value='100'>One Hundred</option>
        </Form.Select>
      </Form>
    )
  }
}

export default HornChoices;