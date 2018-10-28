/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';
import products from '../../util/products.json';

class ProductContainer extends Component {
  render() {
    return (
      <div className="ProductContainer">
        {
          products.map((product, index) =>
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={4}
              key={index}
            >
              <ProductCard
                product={product}
                index={index}
              />
            </Col>
          )
        }
      </div>
    );
  }
}

export default ProductContainer;
