import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Success.css'

import { Container, Row, Col } from '../../components/Grid'

class Success extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="md-12">
              <div className="alert alert-success text-center" role="alert">Checkout Successful!</div>
              <div className="text-center">
                <Link to="/"><button className="btn btn-primary">Go Back</button></Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Success