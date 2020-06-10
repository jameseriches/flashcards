import React from "react";
import "./App.css";
import { Container, Header, Segment, Button, Icon } from "semantic-ui-react";
import Cards from "./Cards";
import CardForm from "./CardForm";



class App extends React.Component {
  state = { 
    cards: [
      { id: 1, word: "Test1", definition: "example1", },
      { id: 2, word: "Test2", definition: "example2", },
      { id: 3, word: "Test3", definition: "example3", },
    ],
    showForm: true,
    isEditing: false,
    editCardID: null,
  };
  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  editClickHandler = (id) => {
    this.setState(
      {
        isEditing: true,
        showForm: false,
        editCardID: id,
      },
      () =>
      this.setState({
        showForm: true,
      })
    );
  };
  addCard = (card) => {
    let newCard = {id: `${Math.random()}`, ...card };
    this.setState({ cards: [newCard, ...this.state.cards] });
  };
  
  editCard = (updatedCardInfo) => {
    const editedCards = this.state.cards.map((c) => {
    if (c.id !== this.state.editCardID) return c;
    console.log(c);
    console.log(updatedCardInfo);
    console.log({ ...c, ...updatedCardInfo });
    return { ...c, ...updatedCardInfo };
  });

  this.setState({
    cards: editedCards,
    isEditing: false,

  });
};

deleteCard = (id) => {
  const cards = this.state.cards.filter((c) => c.id !== id);
  this.setState({
    cards,
  });
};
getCard = () => {
  const { cards, editCardID, } = this.state;
  return cards.find((c) => c.id === editCardID);
};

render(){
  const { showForm, cards, isEditing } = this.state;
  const card = isEditing ? this.getCard() : null;
  console.log(card);
  
  return (
    <Container style={{ paddingTop: "20px" }}>
        <Header as="h1">React Card List</Header>
        <Segment>
          <Button icon color="blue" onCLick={this.toggleForm}>
            <Icon name={showForm ? "angle double up" : "angle double down" } />
          </Button>
          {showForm && (
            <CardForm
            card={card}
            getCard={this.getCard}
            isEditing={isEditing}
            edit={this.editCard}
            add={this.addCard}
            />
          )}
        </Segment>
        <Cards 
        remove={this.deleteCard}
        editClicked={this.editClickHandler}
        cards={cards}
        />
      </Container>
    );
  }
}



 


export default App;
