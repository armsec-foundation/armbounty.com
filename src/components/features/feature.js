import React from 'react'
import Img from 'gatsby-image'

export default ({feature}) => (
  <li>
    <Img className="icon major style1"
      imgStyle={{padding: "20px", borderRadius: "100%"}}
      fluid={feature.photo.childImageSharp.fluid}
      alt={feature.name} />
    <h3>{feature.title}՝<br/>{feature.name}</h3>
    <p>«{feature.text}»</p>
  </li>
)
