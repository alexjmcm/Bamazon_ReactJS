import React, { Component } from 'react';

import { QuantityBtn } from '../../components/Buttons';
import { Card, CardBody, CardHeader, CardText, CardTitle } from '../../components/Card';
import { Container, Row, Col } from '../../components/Grid';
import { Table } from '../../components/Table';
import { Title } from '../../components/Title';

import API from '../../utils/API';

class Dashboard extends Component {

  state = {
    products: []
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    API
      .getProducts()
      .then(res => {

        // Data in form of table
        console.log(res.data);

        this.setState({
          products: res.data
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

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

                  {this.state.products.length > 0 ?

                    <Table>
                      <thead>
                        <tr>
                          <th>Product ID</th>
                          <th>Product Name</th>
                          <th>Department</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.products.map((product, i) => (
                          <tr key={i}>
                            <td>{product.id}</td>
                            <td>{product.product_name}</td>
                            <td>{product.department_name}</td>
                            <td>{product.price}</td>
                            <td>{product.stock_quantity}</td>
                            <td>
                              <QuantityBtn type="plus" />
                              <QuantityBtn type="minus" />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  :
                    <div className="text-center"><em>No Products Available</em></div>
                  }
                </CardBody>
              </Card>
            </Col>

            <Col size="md-3">

              {/* Checkout Section */}
              <Card>
                <CardHeader>Checkout</CardHeader>
                <CardBody>

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