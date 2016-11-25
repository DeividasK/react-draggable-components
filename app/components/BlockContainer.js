import React from 'react';
import { CardColumns } from 'reactstrap';
import { DragSource } from 'react-dnd';

import { ItemTypes } from '../constants';
import Block from './Block';

const blockSource = {
  beginDrag(props, monitor, component) {
    console.log('Dragging has started');
    // console.log(props, monitor, component)
    return props;
  },
  endDrag(props, monitor, component) {
    console.log('Dragging has ended');
    // console.log(props, monitor, component)
    return props;
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class BlockContainer extends React.Component {

  static propTypes = {
    block: React.PropTypes.object.isRequired,
    blockKey: React.PropTypes.number.isRequired
  }

  render () {
    const { connectDragSource, isDragging } = this.props;


    return connectDragSource(
      <div>
        <Block color={ this.props.block.color }>{ this.props.block.name }</Block>
      </div>
    );
  }
}

export default DragSource(ItemTypes.BLOCK, blockSource, collect)(BlockContainer);