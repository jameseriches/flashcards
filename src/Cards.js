import React from "react";
import { Table, TableHeaderCell } from "semantic-ui-react";
import Card from "./Card";

const Cards = ({ cards, remove, editClicked }) => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <TableHeaderCell>Word</TableHeaderCell>
        <TableHeaderCell>Defintion</TableHeaderCell>
        <TableHeaderCell>Options</TableHeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {cards.map((card) => (
        // <Contact key={contact.id} name={contact.name} phone={contact.phone}  />
        <Card
          editClicked={editClicked}
          remove={remove}
          key={card.id}
          {...card}
        />
      ))}
    </Table.Body>
  </Table>
);

export default Cards;