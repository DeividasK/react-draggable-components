import React from 'react';
import { CardColumns } from 'reactstrap';

import BlockContainer from './BlockContainer';

export default class BlocksContainer extends React.Component {

  static propTypes = {
    blocks: React.PropTypes.array,
  }

  static defaultProps = {
    blocks: [
      { id: 1, name: "Maps", color: 'e67e22' },
      { id: 2, name: "Images", color: '3498db' },
      { id: 3, name: "Gallery", color: '9b59b6' },
      { id: 4, name: "Contacts", color: 'f1c40f' },
      { id: 5, name: "About", color: '2ecc71' },
      { id: 6, name: "Other", color: '95a5a6' }
    ]
  }

  render () {
    if (this.props.blocks.length === 0) {
      return (
        <div>
          <CardColumns>
            <BlockContainer>Remove</BlockContainer>
          </CardColumns>
        </div>
      );
    }

    return (
      <div>
        <CardColumns>
          { this.props.blocks.map((block, key) => (
            <BlockContainer key={ key } block={ block } blockKey={ key } />
          ))}
        </CardColumns>
      </div>
    );
  }
}