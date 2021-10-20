import React, { Component } from 'react';
import { CartItem } from './CartItem';
const cartData = [
  {
    id: 1,
    title: 'Fullstack Hoodie',
    price: 99.99,
    quantity: 2,
  },
  {
    id: 2,
    title: 'Tee shirt',
    price: 59.99,
    quantity: 2,
  },
  {
    id: 3,
    title: 'the cap',
    price: 29.99,
    quantity: 2,
  },
  {
    id: 4,
    title: 'The awesome jacket',
    price: 79.99,
    quantity: 2,
  },
];
interface State {
  cartItems?: Array<{
    id: number;
    title: string;
    price: number;
    quantity: number;
  }>;
}
interface Props {}
export default class Cart extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }
  componentDidMount() {
    this.setState({ cartItems: cartData.slice(2) });
  }
  render() {
    const { cartItems } = this.state;
    return (
      <div id="cart" className="w-4/12 p-4 ">
        <div className="text-center align-top border-b m-2">
          <i className="fa fa-2x fa-shopping-cart" />
        </div>
        <div id="cart-content">
          <ul>
            {cartItems?.map((cartItem) => (
              <li id="cart-item" key={cartItem.id}>
                <CartItem cartItem={cartItem} />
              </li>
            ))}{' '}
          </ul>
          {/* cart footer */}
          <div className="m-4 text-sm text-gray-400">
            Total Quantity: 2{' '}
            <span className="float-right">
              <i className="fad fa-trash " /> Remove all
            </span>
          </div>
          <span className="flex width-full justify-center">
            {' '}
            {/* content-center align-center items-center tried*/}
            <button className="bg-green-300 text-white rounded w-44 p-2 px-4 ">
              Checkout ($)
            </button>
          </span>
        </div>
      </div>
    );
  }
}
