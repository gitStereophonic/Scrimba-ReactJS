import React from 'react';

function Product(props) {
  return (
    <div className='product-item'>
      <h2>Product: {props.content.name}</h2>
      <h3>Price: {props.content.price.toLocaleString("en-UK", { style: "currency", currency: "GBP" })}</h3>
      <p>{props.content.description}</p>
    </div>
  );
}

export default Product;
