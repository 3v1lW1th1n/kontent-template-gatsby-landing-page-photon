import React from 'react'

const videoSection = ({ system, elements }) => (
  <section id={system.codename} className="main style1">
    <div className="grid-wrapper">
      <div className="col-6">
        <header className="major">
          <h2>{elements.primary_text.value}</h2>
        </header>
        <p>{elements.secondary_text.value}</p>
      </div>
      <div className="col-6">
          <iframe
            width="100%"
            height="450"
            title={elements.primary_text.value}
            src={`https://www.youtube.com/embed/${elements.youtube_id.value}`}
          />
      </div>
    </div>
  </section>
)

export default videoSection
