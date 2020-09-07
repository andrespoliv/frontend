import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import CreateProduct from './screens/createProduct';


function App() {
  
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="header">
          <div className="brand">
              <button>
                  &#9776;
              </button>
              <img className="logo" src="../assets/logo_1.svg" alt="logo"></img>
              <div>
                Clothing store
              </div>
          </div>
        
      </header>
      
      <main className="main">
          <div className="content">
          <Route path="/" component={CreateProduct}/>
          </div>
      </main> 
      <footer className="footer">
          Made by Andrés Peña Olivares, for Rokket Labs job application purposes only.
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
