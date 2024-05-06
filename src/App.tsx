import NavBar from './components/NavBar/NavBar'
import './layout.scss'
import HomePage from './routes/HomePage'

function App() {
  return (
    <div className="layout">
      <div className="navbar">
      <NavBar/>
      </div>
      <div className="content">
        <HomePage/>
      </div>
    </div>
  )
}

export default App