import React from 'react'

export default ({intro:[{node}]}) => (
  <section id="intro" className="main">
    <header className="major"
        dangerouslySetInnerHTML={{
          __html: node.html
      }} />
  </section>
)


