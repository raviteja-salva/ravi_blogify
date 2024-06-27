import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <img
        alt="wave"
        className="logo"
        src="https://res.cloudinary.com/dw5uzflen/image/upload/v1719381326/article_iv8ogc.png"
      />
      <h1 className="title">Blogify</h1>
    </div>
    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="route-link" to="/">
          Home
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/save">
          Saved
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
