import React from 'react';
interface ProductListItemProps {
  product: {
    title: string;
    id: number;
    description: string;
    price: number;
  };
}
export function ProductListItem({ product }: ProductListItemProps) {
  return (
    <ul id="item" className="flex m-8 border-b">
      <li>
        <h2 className="font-semibold">
          {product.title}
          <span className="absolute right-10 text-white bg-blue-400 rounded w-36 p-2 text-center">
            Add to Cart
          </span>
        </h2>
        <p>{product.description}</p>
        <span className="font-semibold text-blue-500">
          <i className="fas fa-dollar-sign"></i> {product.price}
        </span>
      </li>
    </ul>
  );
}
