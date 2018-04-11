import React, { Component } from 'react'
import config from '../libs/config'
import Breadcrumbs from '../partials/breadcrumbs'
import Searchcontent from '../partials/searchcontent'
import Searchbox from '../partials/searchbox'
import app from '../libs/fetch'

export default class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      movies: [],
      totalPerPage: null,
      totalResults: null,
      search: '',
      message: null
    }
    this.timeoutId = null
    this.firstTimeInit = true
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount () {
    this.getMovies(config.defaultMovies)
  }

  getMovies (keyword) {
    if (!this.firstTimeInit) {
      this.setState({loading: true})
    }
    app.fetchMovies(keyword)
    .then(results => {
      console.log(results)
      this.setState({
        movies: results.data.Search,
        totalPerPage: results.data.Search.length,
        totalResults: results.data.totalResults,
        loading: false
      })
    })
    .catch(error => {
      this.setState({
        movies: [],
        totalResults: null,
        message: error,
        loading: false
      })
    })
    if (this.firstTimeInit) {
      this.firstTimeInit = false
    }
  }

  handleSearch (value) {
    let keyWord = value
    let newKeyWord = keyWord.trim()
    let keywordLength = newKeyWord.length
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
    this.setState({
      search: keyWord
    })
    if (keywordLength < 3) {
      if (keywordLength === 0) {
        this.timeoutId = setTimeout(() => {
          this.getMovies(config.defaultMovies)
        }, 500)
        return
      }
      this.timeoutId = setTimeout(() => {
        this.setState({
          movies: [],
          totalResults: null,
          message: config.page.search.keyWordLengthMessage
        })
      }, 500)
      return
    }
    this.timeoutId = setTimeout(() => {
      this.getMovies(newKeyWord)
    }, 500)
  }

  render () {
    const { loading, movies, totalPerPage, totalResults, search, message } = this.state
    return (
      <div className='search-wrapper'>
        <Breadcrumbs search={config.page.search} />
        <div className='search-content block-content'>
          <Searchbox onSearchChange={this.handleSearch} value={search} />
          {this.state.totalResults && <p>Showing <span className='totalresults'>{totalPerPage}</span> of <span className='totalresults'>{totalResults}</span> movies</p>}
          {
          <Searchcontent movies={movies || []} loading={loading} searchmessage={message} />
          }
        </div>
      </div>
    )
  }
}
