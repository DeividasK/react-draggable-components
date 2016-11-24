import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

export function Block (props) {
  return (
    <Card inverse>
      <CardImg
        width="100%"
        src={ "http://placehold.it/200x200/" + props.color + "/ecf0f1?text=" + props.children }
        alt={ props.children }
      />
    </Card>
  );
}

Block.propTypes = {
  color: React.PropTypes.string
};