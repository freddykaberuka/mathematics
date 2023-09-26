import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="nav-container">
    <h1>Math Magicians</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {' '}
        |
        {' '}
        <li><Link to="/calculator"> Calculator </Link></li>
        {' '}
        |
        {' '}
        <li><Link to="/quotes"> Quote </Link></li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
