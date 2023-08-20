import React from 'react';
import sampleImage from '../logo192.png';

const ProductRow = ({ image, name, description, price }) => {
  return (
    <div className="row product">
      <div className="col-md-2">
        <img src={image} alt={name} height="150" />
      </div>
      <div className="col-md-8 product-detail">
        <h4>{name}</h4>
        <div dangerouslySetInnerHTML={{__html: description}}></div>
      </div>
      <div className="col-md-2 product-price">
        {price}
      </div>
    </div>
  );
}

export default ProductRow;
