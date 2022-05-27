import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-default navbar-expand-lg navbar-dark bg-dark nav justify-content-center">
  <div className="container-fluid ">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav justify-content-center me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/news">{props.shows}</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Most-Popular</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">In-Genesis</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">In-Temple</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">In-Void</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">#BAYC</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    shows: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set live Properties',
    shows:'Set Type of shows'
};