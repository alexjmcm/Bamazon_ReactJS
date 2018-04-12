import React, { Component } from 'react';

import { Container, Row, Col } from '../../components/Grid';
import { Card, CardBody, CardHeader, CardText, CardTitle } from '../../components/Card';
import { Title } from '../../components/Title';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="md-12">

              {/* Inventory List */}
              <Title>Client Center</Title>

            </Col>
          </Row>

          <Row>
            <Col size="md-9">

              {/* Inventory List Table */}
              <Card>
                <CardHeader>Inventory List</CardHeader>
                <CardBody>
                  <CardText>There is where the table will go</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col size="md-3">

              {/* Checkout Section */}
              <Card>
                <CardHeader>Checkout</CardHeader>
                <CardBody>
                  <CardText></CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Dashboard;