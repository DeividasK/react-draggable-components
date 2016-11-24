import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

export default class Block extends React.Component {

  static propTypes = {
    color: React.PropTypes.string.isRequired,
    size: React.PropTypes.number
  }

  static defaultProps = {
    size: 200,
    color: 'ffffff',
    textColor: '95a5a6'
  }

  render () {
    return (
      <Card inverse>
        <CardImg
          width="100%"
          src={ "http://placehold.it/" + this.props.size + "x200/" + this.props.color + "/" + this.props.textColor + "?text=" + this.props.children }
          alt={ this.props.children }
        />
      </Card>
    );
  }
}