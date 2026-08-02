function Docs() {
  return (
    <div className="page">
      <h1>docs</h1>
      <p>site and build notes.</p>

      <h2>7/1/2025</h2>
      <ul>
        <li>successful ssl cert deploy after reissue</li>
        <li>updated scripts for resetting the remote server and hot reloading for local dev</li>
        <li>working on hosting pdf document</li>
      </ul>

      <h2>this site</h2>
      <ul>
        <li>static react + vite build deployed to cloudflare</li>
        <li>custom font: daddytimemono</li>
        <li>resume compiled from latex on every push</li>
      </ul>
    </div>
  )
}

export default Docs
