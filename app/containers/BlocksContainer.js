import React from 'react';
import { CardColumns } from 'reactstrap';
import { connect } from 'react-redux';

import BlockContainer from './BlockContainer';

@connect((store) => ({ blocks: store.blocks.list }))
export default class BlocksContainer extends React.Component {

  static propTypes = {
    blocks: React.PropTypes.array.isRequired
  }

  render () {
    return (
      <CardColumns>
        { this.props.blocks.map((block, key) => (
          <BlockContainer key={ key } index={ key } block={ block } canDrag={ true } canDrop={ false } />
        ))}
      </CardColumns>
    );
  }
}