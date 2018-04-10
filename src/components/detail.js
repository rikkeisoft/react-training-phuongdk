import React, { Component } from 'react'
import config from '../config'
import Breadcrumbs from '../partials/breadcrumbs'
import Tablecontent from '../partials/tablecontent'
import axios from 'axios'

class Detail extends Component {
  constructor (props) {
    super(props)
    this.detail = props.match.params.id
    this.state = {
      movies: null,
      message: null
    }
  }

  componentDidMount () {
    this.getDetail()
  }

  getDetail () {
    axios.get(`https://www.omdbapi.com/?i=${this.detail}&apikey=${config.api_key}`)
      .then(results => {
        if (results.data.Response === 'True') {
          console.log(results)
          this.setState({
            movies: results.data
          })
        } else {
          this.setState({
            movies: null,
            message: config.page.detail.invalid_message
          })
        }
      })
      .catch(error => console.log(error))
  }

  render () {
    const movies = this.state.movies
    return (
      <div className='detail-wrapper component-wrapper'>
        <Breadcrumbs title={config.page.detail.title} color={config.page.detail.color} bgcolor={config.page.detail.bgcolor} />
        <div className='detail-content block-content'>
          {
            <Tablecontent detail={movies} detailmessage={this.state.message} />
          }
        </div>
      </div>
    )
  }
}
export default Detail
