import React, { Component } from 'react';
export default class Cart extends Component {
  render() {
    return (
      <div id="cart" className="w-4/12 p-4 ">
        <div className="text-center align-top border-b m-2">
          <i className="fa fa-2x fa-shopping-cart" />
        </div>
        <div id="cart-content">
          <p className="text-gray-500">
            The Fullstack Hoodie
            <span className="float-right">
              <i className="fa fa-arrow-circle-up" />{' '}
              <i className="fa fa-arrow-circle-down" />
            </span>
          </p>
          <span className="text-green-500">99$ each</span>
          <span className="float-right font-thin text-gray-500">
            Quantity: 2
          </span>
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
