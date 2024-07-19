import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Products from './components/Products';
import data from './Assets/data';


function App() {
  return (
  <div className="App">
      <NavBar/>
      <Products datalist={data}/>
    </div>

  );
}

export default App;
