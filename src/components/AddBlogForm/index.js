import {useHistory} from 'react-router-dom'
import React, {useState, useContext} from 'react'
import {v4} from 'uuid'
import BlogContext from '../../context/BlogContext'
import './index.css'

const AddBlogForm = () => {
  const [titleInput, setTitleInput] = useState('')
  const [authorInput, setAuthorInput] = useState('')
  const [summary, setSummary] = useState('')
  const [topic, setTopic] = useState('')
  const [showErrorMsg, setShowErrorMsg] = useState(false)
  const {addBlogItem, blogList} = useContext(BlogContext)
  const history = useHistory()

  const changeTitleInput = event => {
    setTitleInput(event.target.value)
  }

  const onChangeAuthor = event => {
    setAuthorInput(event.target.value)
  }

  const onChangeSummary = event => {
    setSummary(event.target.value)
  }

  const changeTopic = event => {
    setTopic(event.target.value)
  }

  const onSumbitForm = event => {
    event.preventDefault()

    if (
      titleInput === '' ||
      authorInput === '' ||
      summary === '' ||
      topic === ''
    ) {
      setShowErrorMsg(true)
    } else {
      const blogObject = {
        id: v4(),
        imageUrl:
          'https://res.cloudinary.com/dw5uzflen/image/upload/v1719394605/readmore_kdo8yr.jpg',
        topic,
        title: titleInput,
        avatarUrl:
          'https://res.cloudinary.com/dw5uzflen/image/upload/v1719395162/profile_sr7nvh.png',
        author: authorInput,
        content: summary,
      }

      addBlogItem(blogObject)
      history.replace('/')
    }
  }

  const errorMsg = () => {
    if (showErrorMsg) {
      return <p className="error-msg">*Please fill all required fields</p>
    }
    return null
  }

  return (
    <div className="add-blog-container">
      <form className="add-blog-form" onSubmit={onSumbitForm}>
        <h1 className="add-new-blog-heading">Add New Blog</h1>
        <div className="input-container">
          <label htmlFor="blogTitle" className="label-text">
            Blog Title<span className="star"> *</span>
          </label>
          <input
            type="text"
            className="input"
            placeholder="Enter blog title"
            id="blogTitle"
            value={titleInput}
            onChange={changeTitleInput}
          />
        </div>
        <div className="input-container">
          <label htmlFor="topic" className="label-text">
            Topic<span className="star"> *</span>
          </label>
          <input
            type="text"
            className="input"
            placeholder="Enter topic"
            id="topic"
            value={topic}
            onChange={changeTopic}
          />
        </div>
        <div className="input-container">
          <label htmlFor="author" className="label-text">
            Author<span className="star"> *</span>
          </label>
          <input
            type="text"
            className="input"
            placeholder="Enter author name"
            id="author"
            value={authorInput}
            onChange={onChangeAuthor}
          />
        </div>
        <div className="input-container">
          <label htmlFor="summary" className="label-text">
            Summary<span className="star"> *</span>
          </label>
          <textarea
            cols="58"
            rows="5"
            className="summary-input"
            placeholder="Write something about your blog..."
            id="summary"
            value={summary}
            onChange={onChangeSummary}
          />
        </div>
        <button type="submit" className="post-button">
          Post
        </button>
        {errorMsg()}
      </form>
    </div>
  )
}

export default AddBlogForm
