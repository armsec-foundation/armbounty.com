import React from 'react'

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
  </section>
)
