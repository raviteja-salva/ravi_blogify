import React, {useState, useEffect, useContext} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogContext from '../../context/BlogContext'
import './index.css'

const BlogItemDetails = ({match}) => {
  const [blogData, setBlogData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const {blogList} = useContext(BlogContext)

  useEffect(() => {
    const {id} = match.params

    const fetchData = async () => {
      try {
        const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
        const data = await response.json()

        if (data !== 'OOPS You Are Accessing Out Of Range') {
          const updatedData = {
            title: data.title,
            imageUrl: data.image_url,
            content: data.content,
            avatarUrl: data.avatar_url,
            author: data.author,
          }
          setBlogData(updatedData)
        } else {
          const foundBlog = blogList.find(item => item.id === id)
          setBlogData(foundBlog)
        }
      } catch (error) {
        console.error('Error fetching blog data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [match.params, blogList])

  const renderBlogItemDetails = () => {
    const {title, imageUrl, content, avatarUrl, author} = blogData

    return (
      <div className="blog-info">
        <h1 className="blog-details-title">{title}</h1>
        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>
        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  return (
    <div className="blog-container">
      {isLoading ? (
        <div data-testid="loader">
          <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
        </div>
      ) : (
        renderBlogItemDetails()
      )}
    </div>
  )
}

export default BlogItemDetails
