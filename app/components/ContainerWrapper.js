import React from 'react';

export function ContainerWrapper(props) {
  return (
    <div className="col-xs-12 rounded bordered">
      { props.children }
    </div>
  );
}