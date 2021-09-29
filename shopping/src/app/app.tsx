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
    <div id="cart" className="w-4/12 p-4 ">
      <div className="text-center align-top border-b m-2">
        <i className="fa fa-2x fa-shopping-cart" />
      </div>
      <div id="cart-content">
        <p className="text-gray-500">The Fullstack Hoodie</p>
        <div className="">
          <span className="text-green-500">99$ each</span>
          <span className="float-right font-thin text-gray-500">
            Quantity: 2
          </span>
        </div>
        <div className="m-4 text-sm text-gray-400">
          Total Quantity: 2{' '}
          <span className="float-right">
            <i className="fad fa-trash " /> Remove all
          </span>
        </div>
        <span className="flex width-full justify-center">
          {' '}
          {/* content-center align-center items-center tried*/}
          <button className="bg-green-300 text-white rounded p-2 px-4 ">
            Checkout ($)
          </button>
        </span>
      </div>
    </div>
  );
}
function Product() {
  return (
    <div id="product" className="bg-white box-content w-8/12 h-44 border-2">
      <div className="text-center align-top border-b border-green-100  m-2">
        <i className="fa fa-2x fa-user-circle" />
      </div>
      <div id="product-list" className="flex m-4">
        <ul>
          <li>
            <div>
              <h2 className="font-semibold">
                The FullStack Hoodie
                <span className="absolute right-2 text-white bg-blue-500 rounded p-2 content-center">
                  Add to Cart
                </span>
              </h2>
              <p>Lightweight, breathable hoodie</p>
              <span className="font-semibold text-blue-500">
                <i className="fas fa-dollar-sign"></i> 99
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div className="relative h-2/6 w-full">
        <span className="font-bold absolute bottom-9 right-2 w-32">
          # of products: 4
        </span>
      </div>
    </div>
  );
}
export default App;
