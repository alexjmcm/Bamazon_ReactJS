import React, { Component } from 'react';
import _ from 'lodash';

import { QuantityBtn } from '../../components/Buttons';
import { Card, CardBody, CardHeader, CardText, CardTitle } from '../../components/Card';
import { Container, Row, Col } from '../../components/Grid';
import { Table } from '../../components/Table';
import { Title } from '../../components/Title';

import API from '../../utils/API';

class Dashboard extends Component {

  state = {
    products: [],
    checkout: []
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

  handleUpdateQuantity = (product, type) => {

    const {id, price, product_name} = product;
    const productIndex = this.state.products.findIndex(product => product.id === id);

    const productArray = [...this.state.products];
    const checkoutArray = [...this.state.checkout];

    // If the product quantity empty, stop the function
    if(productArray[productIndex].stock_quantity === 0) return;
    productArray[productIndex].stock_quantity--;

    // If the checkout array is empty, we create a new checkout
    if(_.isEmpty(checkoutArray)) {

      const newCheckout = [
        {
          id,
          price,
          product_name,
          quantity: 1
        }
      ];

      this.setState({
        products: productArray,
        checkout: newCheckout
      });

    // Otherwise, we will update the current checkout array
    } else {

      const checkoutIndex = this.state.checkout.findIndex(item => item.id === id);
      
      // If the user click is NOT located in the current array, we will add it
      if(checkoutIndex === -1) {
        
        checkoutArray.push({
          id,
          price,
          product_name,
          quantity: 1
        });

        this.setState({
          products: productArray,          
          checkout: checkoutArray
        });

      // Otherwise, we will update the existing quantity
      } else {

        checkoutArray[checkoutIndex].quantity++;

        this.setState({
          products: productArray,
          checkout: checkoutArray
        });
      }
      console.log('Checkout Array: ', checkoutArray);
    }
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
                              <QuantityBtn handleUpdateQuantity={this.handleUpdateQuantity} product={product} type="plus" />
                              <QuantityBtn handleUpdateQuantity={this.handleUpdateQuantity} product={product} type="minus" />
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
                  
                  {this.state.checkout.length > 0 ? 

                    <table>
                      <tbody>
                        {this.state.checkout.map((item, i) => (
                          <tr key={i}>
                            <td>{item.quantity}x</td>
                            <td>{item.product_name}</td>
                            <td>{item.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  :
                    <div className="text-center"><em>Checkout is Empty</em></div>
                  }
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