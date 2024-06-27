import {Link} from 'react-router-dom'
import {HiOutlineSaveAs} from 'react-icons/hi'
import './index.css'
import {AiFillDelete} from 'react-icons/ai'
import BlogContext from '../../context/BlogContext'

const BlogItem = props => (
  <BlogContext.Consumer>
    {value => {
      const {deleteBlog, saveBlogItem} = value
      const {blogItemDetails} = props
      const {id, imageUrl, topic, title, avatarUrl, author} = blogItemDetails

      const onClickDelete = () => {
        deleteBlog(id)
      }

      const onClickSave = () => {
        saveBlogItem(blogItemDetails)
      }

      return (
        <li className="blog-item">
          <Link to={`/blogs/${id}`} className="blog-item-link">
            <div className="blog-item-container">
              <img
                className="blog-item-image"
                src={imageUrl}
                alt={`item${id}`}
              />
              <div className="blog-item-info">
                <p className="blog-item-topic">{topic}</p>
                <h1 className="blog-item-title">{title}</h1>
                <div className="author-info">
                  <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
                  <p className="author-name">{author}</p>
                </div>
              </div>
            </div>
          </Link>
          <div className="delete-save-container">
            <button className="delete-button" onClick={onClickDelete}>
              <AiFillDelete className="delete-icon" aria-label="delete" />
            </button>
            <button className="delete-button" onClick={onClickSave}>
              <HiOutlineSaveAs className="delete-icon" aria-label="save" />
            </button>
          </div>
        </li>
      )
    }}
  </BlogContext.Consumer>
)

export default BlogItem
