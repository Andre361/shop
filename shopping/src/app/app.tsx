import styles from './app.module.css';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

export function App() {
  return (
    <div id="app" className="bg-green-50 flex flex-row ">
      <Cart /> <Product />
    </div>
  );
}

function Cart() {
  return (
    <div id="cart" className="flex  m-2 w-4/12 text-center p-16">
      <div className="cart-icon">
        <i className="fa fa-2x fa-shopping-cart" />
      </div>
      <div>
        <ul className="flex">
          <li>
            <p>The Fullstack Hoodie</p>
            <div className="items-right">
              <p>(placeholder icon text)</p>
            </div>
            <div className="item-details">
              <span className="text-green-500">$99 each</span>
              <span className="float-right">Quantity: 2</span>
            </div>
          </li>
        </ul>
        <div className="cart-props">
          <p>
            Total Quantity: <span>2</span>
          </p>
          <p className="remove-icon">{/*TODO remove icon*/}</p>
        </div>
        <button className="px-10 py-4 text-white bg-indigo-500 rounded hover:bg-indigo-700">
          Checkout (<span className="font-bold">$</span>)
        </button>
      </div>
    </div>
  );
}
function Product() {
  return (
    <div id="product" className="flex bg-white  box-content p-4 w-8/12 p-16 ">
      <div className="text-center align-top">
        <i className="fa fa-2x fa-user-circle" />
      </div>

      <ul>
        <li>
          <div>
            <h2 className="font-semibold">
              The FullStack Hoodie{' '}
              <span className="float-right text-white bg-blue-500 rounded p-2 m-2">
                Add to Cart
              </span>
            </h2>
            <p>Lightweight, breathable hoodie</p>
            <span className="font-semibold text-blue-500">
              {/* add icon */}$99
            </span>
          </div>
        </li>
      </ul>
      <div className="relative h-32 w-32">
        <span className="font-bold absolute bottom-0 right-0 h-16 w-16">
          # of products: 4
        </span>
      </div>
    </div>
  );
}
export default App;
