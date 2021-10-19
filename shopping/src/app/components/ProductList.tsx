import React from 'react';
import { ProductListItem } from './ProductListItem';
const itemList = [
  {
    id: 1,
    title: 'Fullstack Hoodie',
    description: 'lightweight, breathable with a well designed crest',
    price: 99.99,
  },
  {
    id: 2,
    title: 'Tee shirt',
    description: 'the original clothing item',
    price: 59.99,
  },
  {
    id: 3,
    title: 'the cap',
    description: 'stay comfortable with the amazing cap',
    price: 29.99,
  },
  {
    id: 4,
    title: 'The awesome jacket',
    description: 'The durable and well fitted clothing item',
    price: 79.99,
  },
];
export const ProductList = function () {
  return (
    <div
      id="product-list"
      className="bg-white box-content w-8/12 h-full border-2"
    >
      <div className="text-center align-top border-b border-green-100  m-2">
        <i className="fa fa-2x fa-user-circle" />
      </div>
      {itemList.map((productItem) => (
        <div id="list-item" key={productItem.id}>
          <ProductListItem product={productItem} />
        </div>
      ))}
      <div className="relative h-2/6 w-full">
        <p className="font-bold absolute bottom-2 right-2 w-32">
          # of products: {itemList.length}
        </p>
      </div>
    </div>
  );
};
