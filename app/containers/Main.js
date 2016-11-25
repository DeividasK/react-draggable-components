import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import { ContainerTitle } from '../components/ContainerTitle';
import { ContainerWrapper } from '../components/ContainerWrapper';
import BlocksContainer from './BlocksContainer';
import PreviewsContainer from './PreviewsContainer';
import { AddPlaceholder } from '../actions/dndActions';

@DragDropContext(HTML5Backend)
export default class Main extends React.Component {

  componentWillMount() {
    AddPlaceholder();
  }

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