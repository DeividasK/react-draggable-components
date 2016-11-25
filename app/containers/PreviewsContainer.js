import React from 'react';
import { connect } from 'react-redux';

import BlockContainer from './BlockContainer';

@connect((store) => ({ previews: store.previews.list }))
export default class PreviewsContainer extends React.Component {

  static propTypes = {
    previews: React.PropTypes.array,
  }

  render () {
    return (
      <div>
        { this.props.previews.map((block, key) => (
          <BlockContainer
            key={ key }
            index={ key }
            block={ block }
            canDrag={ (this.props.placeholderIndex !== key) }
            canDrop={ true }
          />
        ))}
      </div>
    );
  }
}