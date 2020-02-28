import React from 'react'
import { Link } from 'gatsby'

import logo from './logo.svg';

export default (props) => (
  <header id="header" className="alt">
    <Link className="logo" to="/">
      <img src={logo} alt="" />
    </Link>
    <h1 style={{fontFamily: 'Open Sans'}}>{props.title}</h1>
    <p></p>
  </header>
)
