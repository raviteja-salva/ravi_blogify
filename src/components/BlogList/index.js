import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogContext from '../../context/BlogContext'
import BlogItem from '../BlogItem'

import './index.css'

const BlogList = () => (
  <BlogContext.Consumer>
    {value => {
      const {blogList, isLoading} = value
      return (
        <div className="blogs-list-container">
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
            </div>
          ) : (
            <ul className="blogs-list">
              {blogList.map(eachBlogItem => (
                <BlogItem
                  key={eachBlogItem.id}
                  blogItemDetails={eachBlogItem}
                />
              ))}
            </ul>
          )}
        </div>
      )
    }}
  </BlogContext.Consumer>
)

export default BlogList
