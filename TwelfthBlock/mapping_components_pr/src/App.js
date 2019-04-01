/*
 * @author Raccoon Developer
 * @date 04.01.2019 
 *
 * Given a list of products (as an array of objects, as seen in productsData.js)
 * render a <Product /> component (which you'll also need to create) for each
 * product in the list.
 *
 * Make sure to use the array's `.map()` method to create these components, and 
 * don't forget to pass a `key` prop to it to avoid the warning.
 */

import React from 'react';
import Product from './components/Product';

import products from './vschoolProducts';

function App() {
  const productsComponents = products.map(product => {
    return (
      <Product key={product.id} content={{
        name: product.name,
        price: product.price,
        description: product.description
      }} />
    );
  });

  return (
    <div className='product-list'>
      {productsComponents}
    </div>
  );
}

export default App;
