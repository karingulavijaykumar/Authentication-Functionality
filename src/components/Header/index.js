// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-items">
    <Link to="/">
      <p className="item">Home</p>
    </Link>
    <Link to="/about">
      <p className="item">About</p>
    </Link>
  </nav>
)
export default Header
