import React from 'react';
import Nav from './components/nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/about';
import Shopping from './components/shopping';
import Home from './components/home';
import './style.css'
import ItemDetails from './components/itemDetails';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shopping />} />
          <Route path="/shop/:id" element={<ItemDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
