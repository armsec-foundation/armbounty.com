import React from "react"

import Feature from './feature'

const renderFeatures = (features) => {
  return features.map((edge) => {
    return <Feature key={edge.node.id} feature={edge.node.frontmatter} />
  });
}

export default (props) => (
  <section id="features" className="main special">
    <header className="major">
      <h2>Կարծիքներ</h2>
    </header>
    <ul className="features">
      {props.features && renderFeatures(props.features)}
    </ul>
  </section>
)
