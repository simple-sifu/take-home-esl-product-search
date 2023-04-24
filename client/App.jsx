import React, {useState} from 'react';
import ProductComponent from './Products/ProductComponent'
import { Provider } from 'react-redux';
import store from './common/store';
import './styles/menu.scss';

function App() {

  const [showingSearch, setShowingSearch] = useState(false);

  function showSearchContainer() {
      console.log("showSearchContainer showingSearch=", showingSearch);
      setShowingSearch(() => !showingSearch)
  }


  function onSearch(e) {
        console.log("searching..... value=", e.target.value)
    }

  console.log("app: showingSearch=", showingSearch);
  return (
    <Provider store={store}>
      <div className="App">
      <header className="full-screen-header menu">
                <div className="menu-container">
                    <div className="menu-holder">
                        <h1>ELC</h1>
                        <nav>
                            <a href="#" className="nav-item">HOLIDAY</a>
                            <a href="#" className="nav-item">WHAT'S NEW</a>
                            <a href="#" className="nav-item">PRODUCTS</a>
                            <a href="#" className="nav-item">BESTSELLERS</a>
                            <a href="#" className="nav-item">GOODBYES</a>
                            {/* <a href="#" className="nav-item">STORES</a> */}
                            {/* <a href="#" className="nav-item">INSPIRATION</a> */}

                            <a href="#" onClick={() => showSearchContainer()}>
                                <i className="material-icons search">search</i>
                            </a>
                        </nav>
                    </div>
                </div>
                <div className={(showingSearch ? "showing " : "") + "search-container"}>
                    <input type="text" onChange={(e) => onSearch(e)} />
                    <a href="#" onClick={() => showSearchContainer()}>
                        <i className="material-icons close">close</i>
                    </a>
                </div>
            </header>
        <ProductComponent />
      </div>
    </Provider>
  );
}
export default App;

// nav
// sales-content