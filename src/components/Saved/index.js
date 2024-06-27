import './index.css'
import {Link} from 'react-router-dom'
import {IoAddCircleSharp} from 'react-icons/io5'
import SavedList from '../SavedList'

const Saved = () => (
  <div className="home-container">
    <Link to="/add-blog" className="add-blog-link add-blog-para-container">
      <IoAddCircleSharp className="add-blog-icon" />
      <p className="add-blog-para">Add Blog</p>
    </Link>
    <SavedList />
  </div>
)

export default Saved
