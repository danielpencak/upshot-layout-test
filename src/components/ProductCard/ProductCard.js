/* eslint-disable no-unused-vars, max-len */
import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    return (
      <div className="ProductCard" id={this.props.index}>
        <div className="productImageCont">
          <img className="productImage" alt={this.props.product.title} src={this.props.product.image} />
        </div>
        <h3 className="productTitle">{this.props.product.title}</h3>
        <p className="productDesc">{this.props.product.description}</p>
        <div className="buyBtn">
          <h3 className="btnText">BUY NOW</h3>
        </div>
      </div>
    );
  }
}

export default ProductCard;
