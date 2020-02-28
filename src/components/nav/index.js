import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './scroll'
import {Link} from 'gatsby'

const renderLink = (value) => {
  let link
  if (value.elem) {
    link = <Scroll type="id" element={ value.elem }>
      <a href={ `#${value.elem}` }>{ value.label }</a>
    </Scroll>
  } else if (value.to) {
    link = <Link to={ value.to }>{ value.label }</Link>
  } else {
    return <i></i>
  }
  return link
}

export default (props) => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <Scrollspy items={ props.scrollspy }
      currentClassName="is-active" offset={-300}>
      {props.links.map((value, index) => {
        return (<li key={ index }>
          { renderLink(value) }
        </li>)
      })}
    </Scrollspy>
  </nav>
)
