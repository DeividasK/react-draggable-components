import React from 'react';
import { Row, Col } from 'reactstrap';
import { DropTarget } from 'react-dnd';

import { ItemTypes } from '../constants';
import Block from './Block';

const previewsContainerTarget = {
  drop(props, monitor, component) {
    console.log('Dropped');
    console.log(props, monitor, component);
    console.log(monitor.getItem());
    component.props.blocks.splice(0, 0, monitor.getItem().block)
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class PreviewsContainer extends React.Component {

  static propTypes = {
    blocks: React.PropTypes.array,
    blockSize: React.PropTypes.number
  }

  static defaultProps = {
    blocks: [],
    blockSize: 600
  }

  render () {
    const { connectDropTarget, isOver } = this.props;

    return connectDropTarget(
      <div>
        { this.props.blocks.length === 0 && <Block size={ this.props.blockSize } textColor="95a5a6">Drag a block here</Block> }
        { this.props.blocks.length !== 0 && isOver && <Block size={ this.props.blockSize } textColor="95a5a6">Add the block here</Block>}
        { this.props.blocks.map((block, key) => ( <Block size={ this.props.blockSize } key={ key } color={ block.color }>{ block.name }</Block> ))}
      </div>
    );
  }
}

export default DropTarget(ItemTypes.BLOCK, previewsContainerTarget, collect)(PreviewsContainer);