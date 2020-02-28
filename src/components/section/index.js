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

export default ({text, section}) => (
  <section id={section.id} className="main">
    <div className="spotlight">
      <div className="content">
        <header className="major">
          <h2>{section.title}</h2>
        </header>
        <div dangerouslySetInnerHTML={{__html: text}} />
        {section.photo && <p>
          <span className="image main">
            <Img fluid={section.photo.childImageSharp.fluid}
              alt={section.title} />
          </span>
        </p>}
        {section.sponsors &&
          <p>
            Հովանավորներ՝
            <ul class="features sponsors">
              {renderSponsors(section.sponsors)}
            </ul>
          </p>
        }
      </div>
    </div>
  </section>
)