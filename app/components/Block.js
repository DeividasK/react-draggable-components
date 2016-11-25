import React from 'react';
import { Card, CardTitle, CardText, CardBlock, CardSubtitle } from 'reactstrap';

export default class Block extends React.Component {

  static propTypes = {
    color: React.PropTypes.string,
    textColor: React.PropTypes.string,
    title: React.PropTypes.string,
    subtitle: React.PropTypes.string,
    hideSubtitle: React.PropTypes.bool
  }

  static defaultProps = {
    color: 'ffffff',
    textColor: 'ecf0f1'
  }

  render () {
    return (
      <Card style={{ color: '#' + this.props.textColor, backgroundColor: '#' + this.props.color, borderColor: '#333' }}>
        <CardBlock>
          { this.props.title && <CardTitle>{ this.props.title }</CardTitle> }
          { ! this.props.hideSubtitle && this.props.subtitle && <CardSubtitle>{ this.props.subtitle }</CardSubtitle> }
        </CardBlock>
      </Card>
    );
  }
}