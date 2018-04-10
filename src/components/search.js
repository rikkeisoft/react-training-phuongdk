import React, { Component } from 'react'
import config from '../config'
import Breadcrumbs from '../partials/breadcrumbs'
import axios from 'axios'
import Tablecontent from '../partials/tablecontent'

export default class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      movies: null,
      totalResults: null,
      search: '',
      message: null
    }
    this.timeoutId = null
    this.firstTimeInit = true
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount () {
    this.getMovies(config.default_movies)
  }

  getMovies (keywords) {
    if (!this.firstTimeInit) {
      this.setState({loading: true})
    }
    axios.get(`https://www.omdbapi.com/?s=${keywords}&apikey=${config.api_key}`)
      .then(results => {
        if (results.data.Response === 'True') {
          console.log(results)
          this.setState({
            movies: results.data.Search,
            totalResults: results.data.totalResults
          })
        } else {
          this.setState({
            movies: null,
            totalResults: null,
            message: config.page.search.notfound_message
          })
        }
        this.setState({
          loading: false
        })
      })
      .catch(error => console.log(error))
    if (this.firstTimeInit) {
      this.firstTimeInit = false
    }
  }

  handleSearch (event) {
    let keyword = event.target.value
    let newkeyword = keyword.trim()
    let keyword_length = newkeyword.length
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
    this.setState({
      search: keyword
    })
    if (keyword_length < 3) {
      if (keyword_length === 0) {
        this.timeoutId = setTimeout(() => {
          this.getMovies(config.default_movies)
        }, 500)
        return
      }
      this.timeoutId = setTimeout(() => {
        this.setState({
          movies: null,
          totalResults: null,
          message: config.page.search.keywordlength_message
        })
      }, 500)
      return
    }
    this.timeoutId = setTimeout(() => {
      this.getMovies(newkeyword)
    }, 500)
  }

  render () {
    const movies = this.state.movies
    return (
      <div className='search-wrapper'>
        <Breadcrumbs title={config.page.search.title} color={config.page.search.color} bgcolor={config.page.search.bgcolor} />
        <div className='search-content block-content'>
          <div className='searchbox'>
            <input type='text' name='search' placeholder='Search by movie name...' onChange={this.handleSearch} value={this.state.search} />
            {this.state.totalResults && <p className='totalresults'>Total results: {this.state.totalResults}</p>}
          </div>
          {
            <Tablecontent movies={movies || null} loading={this.state.loading} searchmessage={this.state.message} />
          }
        </div>
      </div>
    )
  }
}
