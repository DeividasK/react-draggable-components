import React from 'react';
import { ContainerTitle } from './ContainerTitle';
import BlocksContainer from './BlocksContainer';
import { ContainerWrapper } from './ContainerWrapper';

export function Main () {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <ContainerTitle>Main page</ContainerTitle>
          <ContainerWrapper>

          </ContainerWrapper>
        </div>
        <div className="col-sm-6">
          <ContainerTitle>Blocks</ContainerTitle>
          <ContainerWrapper>
            <BlocksContainer />
          </ContainerWrapper>
        </div>
      </div>
    </div>
  );
}