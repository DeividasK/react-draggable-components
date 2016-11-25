import React from 'react';
import { CardColumns } from 'reactstrap';
import { connect } from 'react-redux';

import BlockContainer from './BlockContainer';

@connect((store) => {
    return {
        blocks: store.blocks.list
    };
})
export default class BlocksContainer extends React.Component {

  static propTypes = {
    blocks: React.PropTypes.array,
  }

  render () {
    return (
      <div>
        <CardColumns>
          { this.props.blocks.map((block, key) => (
            <BlockContainer canDrop={ false } key={ key } block={ block } blockKey={ key } />
          ))}
        </CardColumns>
      </div>
    );
  }
}