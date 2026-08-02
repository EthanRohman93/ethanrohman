import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Docs from './pages/Docs'
import Playground from './pages/Playground'

function Layout() {
  return (
    <div className="site">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/playground" element={<Playground />} />
        </Routes>
      </main>
      <footer>
        <nav>
          <NavLink to="/">home</NavLink>
          <a href="/resume.pdf" download="ethanrohman_resume.pdf">download resume</a>
          <NavLink to="/docs">docs</NavLink>
          <NavLink to="/playground">playground</NavLink>
        </nav>
        <p>&copy; 2025 Ethan Rohman</p>
      </footer>
    </div>
  )
}

export default function App() {
  return <Layout />
}
