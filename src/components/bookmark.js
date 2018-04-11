import React, { Component } from 'react'
import Breadcrumbs from '../partials/breadcrumbs'
import config from '../libs/config'
import {Link} from 'react-router-dom'

class Bookmark extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }
  
  componentDidMount() {
    this.listBookMark();
  }
  
  listBookMark() {
    let arr = []
    for(let i=0, len=window.localStorage.length; i<len; i++) {
      let obj = {}
      let key = window.localStorage.key(i);
      let value = window.localStorage[key];
      obj['id'] = key
      obj['title'] = value
      arr.push(obj)
      this.setState({
        movies: arr
      })
    }
  }

  render () {
    const movies = this.state.movies
    return (
      <div className='home-wrapper component-wrapper'>
      {console.log(this.state.movies)}
        <Breadcrumbs home={config.page.bookmark} />
        <div className='bookmark-content block-content'>
          <h1>Movie bookmarked</h1>
          {
          movies.map((movie, key) =>
          <div key={key}>
            <Link className='btn-moviedetail' to={`/detail/${movie.id}`}>{movie.title}</Link>
          </div>
          )
      }
        </div>
      </div>
    )
  }
}
export default Bookmark
