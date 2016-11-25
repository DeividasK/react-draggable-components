import React from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

import { ItemTypes } from '../constants';
import BlockContainer from './BlockContainer';

@connect((store) => {
  return {
    previews: store.previews.list,
    previewSize: store.previews.defaultSize,
    canBeDroppedOn: ! store.previews.sortingEnabled,
    placeholderIndex: store.previews.indexKey
  };
})
export default class PreviewsContainer extends React.Component {

  static propTypes = {
    previews: React.PropTypes.array,
    previewSize: React.PropTypes.number
  }

  render () {
    return (
      <div>
        { this.props.previews.map((block, key) => (
          <BlockContainer
            canDrop={ true }
            block={{ name: block.name, color: block.color, size: this.props.previewSize, textColor: block.textColor }}
            blockKey={ key }
            key={ key }
          />
        ))}
      </div>
    );
  }
}