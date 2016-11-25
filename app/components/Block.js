import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

export default class Block extends React.Component {

  static propTypes = {
    color: React.PropTypes.string,
    size: React.PropTypes.number,
    textColor: React.PropTypes.string
  }

  static defaultProps = {
    size: 200,
    color: 'ffffff',
    textColor: 'ecf0f1'
  }

  render () {

    return (
      <div>
        <Card inverse>
          <CardImg
            width="100%"
            src={ "http://placehold.it/" + this.props.size + "x200/" + this.props.color + "/" + this.props.textColor + "?text=" + this.props.children }
            alt={ this.props.children }
          />
        </Card>
      </div>
    );
  }
}