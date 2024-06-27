import React from 'react'

const BlogContext = React.createContext({
  blogList: [],
  savedList: [],
  saveBlogItem: () => {},
  addBlogItem: () => {},
  isLoading: true,
  deleteBlog: () => {},
})

export default BlogContext
