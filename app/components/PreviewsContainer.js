import React from 'react';
import Block from './Block';
import { Row, Col } from 'reactstrap';

export default class PreviewsContainer extends React.Component {
  constructor () {
    super();
    this.state = {
      blocks: [],
      blockSize: 600
    };
  }

  render () {
    if (this.state.blocks.length === 0) {
      return (
        <Block size={ this.state.blockSize }>Drag a block here</Block>
      )
    }

    return (
      <div>
        { this.state.blocks.map((block) => ( <Block size={ this.state.blockSize } key={ block.id } color={ block.color }>{ block.name }</Block> ))}
      </div>
    );
  }
}