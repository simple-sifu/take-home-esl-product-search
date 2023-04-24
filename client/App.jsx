import React from 'react';
import ProductComponent from './Products/ProductComponent'
import { Provider } from 'react-redux';
import store from './common/store';
import './styles/main.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="full-screen-header">
          <nav className="nav nav-top">
              <h1 className="logo">ELC</h1>
              <ul className="nav-list" >
                  <li><a href="#">Curriculum</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a className="btn" href="#">Contact</a></li>
              </ul>
          </nav>
          <h3 className="title1">BUY MORE,</h3>
          <h3 className="title2">SAVE MORE</h3>
          <span className="sub-title">Plus free mystery gift with purchases over $85! </span>
          <span className="sub-title">Available online only. Exclusions apply</span>
          <a className="btn" href="#">SHOP BEST-SELLERS</a>
        </header>
        <ProductComponent />
      </div>
    </Provider>
  );
}
export default App;