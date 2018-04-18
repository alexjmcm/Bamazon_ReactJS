import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from '../Grid'

export const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
    <Container>

      {/* Brand */}
      <Link to="/"><div className="navbar-brand" href="/">Bamazon</div></Link>

      {/* Mobile Buttons */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      {/* Navigation Buttons */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">

        </ul>
      </div>
    </Container>
  </nav>
);