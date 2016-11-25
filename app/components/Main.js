import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import { ContainerTitle } from './ContainerTitle';
import { ContainerWrapper } from './ContainerWrapper';
import BlocksContainer from './BlocksContainer';
import PreviewsContainer from './PreviewsContainer';

class Main extends React.Component {
  render () {
    return (
      <Container>
        <Row>
          <Col sm="6">
            <ContainerTitle>Main page</ContainerTitle>
            <ContainerWrapper>
              <PreviewsContainer/>
            </ContainerWrapper>
          </Col>
          <Col sm="6">
            <ContainerTitle>Blocks</ContainerTitle>
            <ContainerWrapper>
              <BlocksContainer/>
            </ContainerWrapper>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DragDropContext(HTML5Backend)(Main);