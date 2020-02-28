import React from 'react'

import Img from 'gatsby-image'

const renderSponsors = (sponsors) => {
  return sponsors.map((sponsor) => (
    <li>
    <a href={sponsor.url}>
      <Img fluid={sponsor.logo.childImageSharp.fluid}
        imgStyle={{objectFit: 'contain'}}
        alt={sponsor.name} />
    </a>
    </li>
  ))
}

export default ({intro:[{node}],nav}) => (
  <section id="intro" className="main">
    <header className="major"
        dangerouslySetInnerHTML={{
          __html: node.html
      }} />
    {nav && <ul className="actions">
      {nav.map((value, index) => {
        return <li key={ index }>{ value }</li>
      })}
    </ul>}
    {node.frontmatter.sponsors &&
      <p>
        Հովանավորներ՝
        <ul class="features sponsors">
          {renderSponsors(node.frontmatter.sponsors)}
        </ul>
      </p>
    }
  </section>
)
