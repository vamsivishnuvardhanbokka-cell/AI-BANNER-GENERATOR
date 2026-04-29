import React, { useState } from 'react'

const LandingPage = () => {
  const [event, setEvent] = useState('')
  const [message, setMessage] = useState('')

  const handleGenerate = (e) => {
    e.preventDefault()
    console.log('Generating banner for:', event)
    console.log('With message:', message)
  }

  return (
    <div className="page-shell">
      <div className="backdrop backdrop-one" />
      <div className="backdrop backdrop-two" />

      <header className="hero">
        <p className="eyebrow">Hackathon-ready creative tooling</p>
        <h1>AI Banner Generator</h1>
        <p className="hero-copy">
          Instantly create polished promotional banners for launches, sales,
          festivals, and campaigns.
        </p>
      </header>

      <main className="layout">
        <section className="panel form-panel">
          <div className="panel-heading">
            <p className="panel-kicker">Design brief</p>
            <h2>Describe the banner you want</h2>
          </div>

          <form className="generator-form" onSubmit={handleGenerate}>
            <label className="field">
              <span>Occasion / Event</span>
              <input
                type="text"
                value={event}
                onChange={(e) => setEvent(e.target.value)}
                placeholder="Diwali, flash sale, product launch..."
                required
              />
            </label>

            <label className="field">
              <span>Main tagline / message</span>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Celebrate the season with 40% off"
                required
              />
            </label>

            <button className="generate-button" type="submit">
              Generate AI Banner
            </button>
          </form>
        </section>

        <section className="panel preview-panel">
          <div className="panel-heading">
            <p className="panel-kicker">Output preview</p>
            <h2>Your generation will appear here</h2>
          </div>

          <div className="preview-card">
            <div className="preview-art">
              <div className="preview-badge">Preview</div>
              <p className="preview-title">
                {event || 'Your next campaign'}
              </p>
              <p className="preview-message">
                {message || 'Generated visuals will show up here once connected.'}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default LandingPage
