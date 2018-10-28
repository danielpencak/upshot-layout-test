/* eslint-disable no-unused-vars */
import { Col, Grid, Row } from 'react-bootstrap';
import React, { Component } from 'react';
import ProductContainer from '../ProductContainer/ProductContainer';
import ProductNav from '../ProductNav/ProductNav';

class Products extends Component {
  render() {
    return (
      <div className="Products">
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={3}>
              <ProductNav />
            </Col>
            <Col xs={12} md={9}>
              <ProductContainer />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Products;
