import React from "react";
import { Form } from "semantic-ui-react";

export default class CardForm extends React.Component {
    state = {
        word: this.props.card ? this.props.card.word : "",
        definition: this.props.card ? this.props.card.definition : "",
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        if (this.props.isEditing) {
            this.props.add(this.state)
        } 
        else {
            this.props.add(this.state);
        }
        
        this.setState({
            word: "",
            definition: "",
        });
    };
    handleChange= (e) => {
        console.log(e.target.value);
        console.log(e.target.word);
        this.setState({
          [e.target.name]: e.target.value,

    });
};

render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Word Here"
            placeholder="Enter the word"
            name="word"
            value={this.state.word}
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            label="Definition Here"
            placeholder="Defintion of the word..."
            name="Definition"
            value={this.state.definition}
            onChange={this.handleChange}
          />
          <Form.Button>Submit</Form.Button>
        </Form.Group>
      </Form>
    );
  }
}