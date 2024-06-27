import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import BlogContext from './context/BlogContext'
import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'
import BlogItemDetails from './components/BlogItemDetails'
import AddBlogForm from './components/AddBlogForm'
import Saved from './components/Saved'

import './App.css'

class App extends Component {
  state = {isLoading: true, blogsData: [], savedList: []}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))

    this.setState({blogsData: formattedData, isLoading: false})
  }

  addBlogItem = obj => {
    this.setState(prevState => ({
      blogsData: [obj, ...prevState.blogsData],
    }))
  }

  saveBlogItem = obj => {
    this.setState(prevState => ({
      savedList: [obj, ...prevState.savedList],
    }))
  }

  deleteBlog = id => {
    this.setState(prevState => ({
      blogsData: prevState.blogsData.filter(item => item.id !== id),
    }))
  }

  render() {
    const {blogsData, isLoading, savedList} = this.state

    return (
      <BlogContext.Provider
        value={{
          blogList: blogsData,
          savedList,
          saveBlogItem: this.saveBlogItem,
          isLoading,
          addBlogItem: this.addBlogItem,
          deleteBlog: this.deleteBlog,
        }}
      >
        <div className="app-container">
          <div className="responsive-container">
            <Header />
            <div className="app-body">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/blogs/:id" component={BlogItemDetails} />
                <Route exact path="/add-blog" component={AddBlogForm} />
                <Route exact path="/save" component={Saved} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </div>
      </BlogContext.Provider>
    )
  }
}

export default App
