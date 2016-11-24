import React from 'react';
import Block from './Block';
import { CardColumns } from 'reactstrap';

export default class BlocksContainer extends React.Component {
  constructor () {
    super();
    this.state = {
      "blocks": [
        { id: 1, name: "Maps", color: 'e67e22' },
        { id: 2, name: "Images", color: '3498db' },
        { id: 3, name: "Gallery", color: '9b59b6' },
        { id: 4, name: "Contacts", color: 'f1c40f' },
        { id: 5, name: "About", color: '2ecc71' },
        { id: 6, name: "Other", color: '95a5a6' }
      ]
    };
  }

  render () {
    if (this.state.blocks.length === 0) {
      return (
        <CardColumns>
          <Block>Remove</Block>
        </CardColumns>
      )
    }

    return (
      <CardColumns>
        { this.state.blocks.map((block) => (
          <Block key={ block.id } color={ block.color } textColor="ecf0f1">{ block.name }</Block>
        ))}
      </CardColumns>
    );
  }
}