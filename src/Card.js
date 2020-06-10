import React from "react";
import { Table, Button } from "semantic-ui-react";

const Card = ({ word, definition, remove, id, editClicked }) => (
    <Table.Row>
        <Table.Cell>{word}</Table.Cell>
        <Table.Cell>{definition}</Table.Cell>
        <Table.Cell>
            <Button onClick={() => remove(id)} color="red">
                Delete
            </Button>
            <Button onClick={() => editClicked(id)} color="orange">
                Edit
            </Button>
        </Table.Cell>
    </Table.Row>
);
export default Card;