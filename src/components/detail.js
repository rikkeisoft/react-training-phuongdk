import React, { Component } from 'react'
import config from '../libs/config'
import Breadcrumbs from '../partials/breadcrumbs'
import Detailcontent from '../partials/detailcontent'
import app from '../libs/fetch'

class Detail extends Component {
  constructor (props) {
    super(props)
    this.detail = props.match.params.id
    this.state = {
      bookmark: false,
      movie: null,
      message: null
    }
    this.handleBookMark = this.handleBookMark.bind(this)
  }

  componentDidMount () {
    this.getDetail(this.detail)
    this.checkBookMark()
  }
  
  getDetail (id) {
    app.fetchMovies(id, 'i')
    .then(results => {
      console.log(results)
      this.setState({
        movie: results.data
      })
    })
    .catch(error => {
      this.setState({
        movie: null,
        message: error
      })
    })
  }
  
  checkBookMark() {
    if (window.localStorage.length > 0 && window.localStorage.getItem(this.detail) !== null) {
      this.setState({
        bookmark: true
      }) 
    }
  }
  
  handleBookMark(event) {
    this.setState({
      bookmark: !this.state.bookmark
    })
    if (this.state.bookmark === false) {
      window.localStorage.setItem(this.state.movie.imdbID, this.state.movie.Title)
    } else {
      window.localStorage.removeItem(this.state.movie.imdbID)
    }
  }

  render () {
    const { bookmark, movie, message } = this.state
    return (
      <div className='detail-wrapper component-wrapper'>
        <Breadcrumbs detail={config.page.detail} />
        <div className='detail-content block-content'>
          { message === null &&
            <div className='bookmark-wrapper' onClick={this.handleBookMark}>
              {bookmark === true ? <i className='fa fa-bookmark green'></i> : <i className='fa fa-bookmark red'></i>}
            </div>
          }  
          {
            <Detailcontent detail={movie} detailmessage={message} />
          }
        </div>
      </div>
    )
  }
}
export default Detail
