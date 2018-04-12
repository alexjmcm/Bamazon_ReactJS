import React from 'react';
import { Container } from '../Grid';

export const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
    <Container>

      {/* Brand */}
      <a className="navbar-brand" href="#">Bamazon</a>

      {/* Mobile Buttons */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      {/* Navigation Buttons */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">

          {/* Button Pending */}
          <li className="nav-item active">
            <a className="nav-link" href="#"><em>Button Pending</em></a>
          </li>

        </ul>
      </div>
    </Container>
  </nav>
);