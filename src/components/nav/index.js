import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './scroll'

export default (props) => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <Scrollspy items={ ['intro', 'features'] }
      currentClassName="is-active" offset={-300}>
      <li>
        <Scroll type="id" element="intro">
          <a href="#intro">Սկիզբ</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="armsec-2019">
          <a href="#armsec-2019">ArmSec 2019</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="first-bounty">
          <a href="#first-bounty">e-Gov</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="features">
          <a href="#features">Կարծիքներ</a>
        </Scroll>
      </li>
    </Scrollspy>
  </nav>
)