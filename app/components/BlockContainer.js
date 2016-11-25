import React from 'react';
import { CardColumns } from 'reactstrap';
import { DragSource, DropTarget } from 'react-dnd';
import { connect } from 'react-redux';

import { ItemTypes } from '../constants';
import Block from './Block';
import { Add, Drop, MovePlaceholder, DragStart, DragEnd } from '../actions/dndActions';

const dragSource = {
  beginDrag(props, monitor, component) {
    DragStart(props.block);
    return props.block;
  },
//   isDragging(props, monitor) {
//     // console.log(props, monitor);
//     // console.log(monitor.getItem());
//     // return true;
// console.log('Dragging');
//     let result = (props.id === 1);
//     console.log(result);
//     return result;
//   },
  // canDrag(props, monitor) {
  //   console.log(props, monitor);
  //   return true;
  // },
  endDrag(props, monitor, component) {
    if ( ! monitor.didDrop()) {
      return DragEnd();
    }

    Add({ draggable: false, name: 'Drag a block here', size: 600, textColor: "95a5a6" })
  }
};

const dropTarget = {
  drop(props, monitor, component) {
    let item = { block: monitor.getItem(), key: props.blockKey };
    Drop(item);
    return item;
  },
  canDrop(props, monitor) {
    return props.canDrop;
  },
  hover(props, monitor, component) {
    if ( ! props.canDrop || props.blockKey === component.props.placeholderIndex) {
      return;
    }
    console.log(props);
    MovePlaceholder(props.blockKey);
  }
};

@connect((store) => ({
  placeholderIndex: store.previews.indexKey
}))

@DragSource(ItemTypes.BLOCK, dragSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource()
}))

@DropTarget(ItemTypes.BLOCK, dropTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver() && monitor.canDrop(),
  draggedBlock: monitor.getItem(),
}))

export default class BlockContainer extends React.Component {

  static propTypes = {
    block: React.PropTypes.object.isRequired,
    blockKey: React.PropTypes.number,
    size: React.PropTypes.number,
    textColor: React.PropTypes.string,
    handleDrop: React.PropTypes.func
  }

  render () {
    // console.log(this.props.placeholderIndex);
    const { connectDragSource, isDragging } = this.props;
    const { connectDropTarget, isOver, draggedBlock } = this.props;

    const block = this.props.block;

    // if (this.props.dropTarget) {
    //   return connectDropTarget(
    //     <div>
    //       { ! isOver && <Block color={ block.color } size={ block.size } textColor={ block.textColor }>{ block.name }</Block> }
    //       { isOver && <Block color={ draggedBlock.color } size={ block.size }>{ draggedBlock.name }</Block> }
    //     </div>
    //   );
    // }

    return connectDropTarget(connectDragSource(
      <div>
        { ! isOver && <Block color={ block.color } size={ block.size } textColor={ block.textColor }>{ block.name }</Block> }
        { isOver && <Block color={ draggedBlock.color } size={ block.size }>{ draggedBlock.name }</Block> }
      </div>
    ));
  }
}