import React from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { connect } from 'react-redux';

import { ItemTypes } from '../constants';
import Block from '../components/Block';
import { AddPlaceholder, Drop, MovePlaceholder, DragStart, DragEnd } from '../actions/dndActions';

const dragSource = {
  beginDrag(props) {
    return DragStart(props.block, props.index, (props.canDrag && props.canDrop));
  },
  canDrag(props) {
    return props.canDrag;
  },
  endDrag(props, monitor) {
    if ( ! monitor.didDrop()) { return DragEnd(); }
    AddPlaceholder()
  }
};

const dropTarget = {
  drop(props, monitor) {
    return Drop({ block: monitor.getItem(), key: props.index });
  },
  canDrop(props) {
    return props.canDrop;
  },
  hover(props, monitor, component) {
    if ( ! props.canDrop || props.index === component.props.placeholderIndex) { return; }
    MovePlaceholder(props.index);
  }
};

@connect((store) => ({ placeholderIndex: store.previews.indexKey }))

@DragSource(ItemTypes.BLOCK, dragSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource()
}))

@DropTarget(ItemTypes.BLOCK, dropTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver() && monitor.canDrop(),
  draggedBlock: monitor.getItem()
}))

export default class BlockContainer extends React.Component {

  static propTypes = {
    index: React.PropTypes.number.isRequired,
    block: React.PropTypes.object.isRequired,
    canDrag: React.PropTypes.bool.isRequired,
    canDrop: React.PropTypes.bool.isRequired
  }

  render () {
    const { connectDragSource, connectDropTarget, draggedBlock } = this.props;

    let block = (this.props.isOver) ? { ...this.props.block, ...draggedBlock } : this.props.block;

    return connectDropTarget(connectDragSource(
      <div>
        <Block
          subtitle={ block.subtitle }
          hideSubtitle={ ! this.props.canDrop }
          color={ block.color }
          textColor={ block.textColor }
          title={ block.title } />
      </div>
    ));
  }
}