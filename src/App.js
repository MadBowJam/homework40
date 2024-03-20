import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { UserProvider } from './components/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="/"  exact="true">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" >About</NavLink>
              </li>
              <li>
                <NavLink to="/contact" >Contact</NavLink>
              </li>
            </ul>
          </nav>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/*" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;