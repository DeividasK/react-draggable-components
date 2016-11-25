import React from 'react';

export function ContainerWrapper(props) {
  return (
    <div className="col-xs-12 rounded" style={{ border: "1px solid #333", paddingTop: "15px" }}>
      { props.children }
    </div>
  );
}