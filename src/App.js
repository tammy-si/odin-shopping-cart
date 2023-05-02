import React from 'react';
import Nav from './components/nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/about';
import Shopping from './components/shopping';
import Home from './components/home';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />} />
          <Route path='/shopping' element={<Shopping />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
