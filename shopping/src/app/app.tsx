import styles from './app.module.css';
import { Component } from 'react';
import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';
import Cart from './components';
import { ProductList } from './components';

function App() {
  return (
    <div
      id="app"
      className="bg-gradient-to-br from-bluegray-100 to-blue-200 flex flex-row items-center p-8  "
    >
      <Cart /> <ProductList></ProductList>
    </div>
  );
}
export default App;
