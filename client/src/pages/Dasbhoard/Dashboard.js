import React, { Component } from 'react';
import _ from 'lodash';
import './Dashboard.css';

import { Card, CardBody, CardHeader } from '../../components/Card';
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

        console.log(res.data);

        this.setState({
          products: res.data
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleUAddCheckout = product => {

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

      // Attempt to find item in checkout array
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
    }
  }

  handleSubtractCheckout = product => {

    const {id, price, product_name} = product;
    const checkoutIndex = this.state.checkout.findIndex(item => item.id === id);
    const productIndex = this.state.products.findIndex(product => product.id === id);

    const productArray = [...this.state.products];
    const checkoutArray = [...this.state.checkout];

    // Update quantities for both arrays
    checkoutArray[checkoutIndex].quantity--;
    productArray[productIndex].stock_quantity++;
    
    // If checkout amount reaches zero, we will remove from array
    if(checkoutArray[checkoutIndex].quantity === 0) {

      checkoutArray.splice(checkoutIndex, 1);

      this.setState({
        products: productArray,
        checkout: checkoutArray
      });

    // Otherwise, we update normally
    } else {
      this.setState({
        products: productArray,
        checkout:checkoutArray
      })
    }
  }

  handleFormSubmit = e => {

    e.preventDefault();

    // Disable all buttons to prevent multiple requests
    document.querySelectorAll('button').forEach(button => {
      button.setAttribute('disabled', '');
    });

    console.log(this.state.products);


  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="md-8">

              {/* Inventory List Table */}
              <Card>
                <CardHeader>Inventory List</CardHeader>
                <CardBody>

                  {this.state.products.length > 0 ?

                    <Table>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
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
                            <td>{(product.price*1).toLocaleString(undefined, { minimumFractionDigits: 2})}</td>
                            <td>{product.stock_quantity}</td>
                            <td>
                              <button onClick={() => this.handleUAddCheckout(product)} className="btn btn-sm btn-success">Add</button>
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

            <Col size="md-4">

              {/* Checkout Section */}
              <Card>
                <CardHeader>Checkout</CardHeader>
                <CardBody>
                  
                  {this.state.checkout.length > 0 ?

                    <div>
                      <Table>
                        <tbody>
                          {this.state.checkout.map((item, i) => (
                            <tr key={i}>
                              <td>{item.quantity}x</td>
                              <td>{item.product_name}</td>
                              <td>{(item.quantity * item.price).toLocaleString(undefined, { minimumFractionDigits: 2})}</td>
                              <td onClick={() => this.handleSubtractCheckout(item)} ><i className="fas fa-times"></i></td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot>
                          <tr>
                            <td></td>
                            <td><b>Total</b></td>
                            <td><b>${this.state.checkout.reduce((sum, item) => sum += (item.quantity * item.price), 0).toLocaleString(undefined, { minimumFractionDigits: 2})}</b></td>
                            <td></td>
                          </tr>
                        </tfoot>
                      </Table>

                      <form onSubmit={this.handleFormSubmit}>
                        <div className="text-center">
                          <button type="submit" className="btn btn-danger">Submit</button>
                        </div>
                      </form>
                    </div>
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