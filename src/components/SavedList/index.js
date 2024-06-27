import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogContext from '../../context/BlogContext'
import BlogItem from '../BlogItem'

import './index.css'

const SavedList = () => (
  <BlogContext.Consumer>
    {value => {
      const {savedList, isLoading} = value

      const emptyView = () => (
        <div className="empty-view-container">
          <img
            src="https://res.cloudinary.com/dw5uzflen/image/upload/v1719415508/icons8-empty-box-94_wuxajt.png"
            className="empty-box"
          />
          <h1>No Blogs Here!!</h1>
        </div>
      )

      const showBlogsList = () => {
        if (savedList.length === 0) {
          return emptyView()
        }
        return (
          <ul className="blogs-list">
            {savedList.map(eachBlogItem => (
              <BlogItem key={eachBlogItem.id} blogItemDetails={eachBlogItem} />
            ))}
          </ul>
        )
      }

      return (
        <div className="blogs-list-container">
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
            </div>
          ) : (
            showBlogsList()
          )}
        </div>
      )
    }}
  </BlogContext.Consumer>
)

export default SavedList
