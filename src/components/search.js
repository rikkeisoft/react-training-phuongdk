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
      loadmore: '',
      movies: [],
      totalPerPage: null,
      totalResults: null,
      search: '',
      message: null
    }
    this.page = 1
    this.timeoutId = null
    this.firstTimeInit = true
    this.handleSearch = this.handleSearch.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  componentDidMount () {
    this.getMovies(config.defaultMovies)
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll (event) {
    let keyWord = this.state.search
    if (keyWord === '') {
      keyWord = config.defaultMovies
    }
    let scrollHeight, documentHeight
    documentHeight = document.body.scrollHeight
    scrollHeight = window.scrollY + window.innerHeight
    if ((scrollHeight - 26) >= documentHeight) {
      this.page++
      this.timeoutId = setTimeout(() => {
        this.setState({
          loadmore: true
        })
        app.fetchMovies(keyWord, null, this.page)
          .then(results => {
            console.log(results)
            this.setState({
              movies: [...this.state.movies, ...results.data.Search],
              totalPerPage: this.state.totalPerPage + results.data.Search.length,
              totalResults: results.data.totalResults,
              loadmore: ''
            })
          })
          .catch(error => {
            console.log(error)
            this.setState({
              loadmore: false
            })
          })
      }, 1000)
    }
  }

  getMovies (keyWord) {
    if (!this.firstTimeInit) {
      this.setState({loading: true})
    }
    app.fetchMovies(keyWord)
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
    this.page = 1
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
    const { loading, loadmore, movies, totalPerPage, totalResults, search, message } = this.state
    const { page: { search: { loadmoreSuccess, loadmoreError } } } = config
    return (
      <div className='search-wrapper'>
        <Breadcrumbs search={config.page.search} />
        <div className='search-content block-content'>
          <Searchbox onSearchChange={this.handleSearch} value={search} />
          {
            this.state.totalResults && <p>Showing <span className='totalresults'>{totalPerPage}</span> of <span className='totalresults'>{totalResults}</span> movies</p>
          }
          {
            <Searchcontent movies={movies || []} loading={loading} searchmessage={message} />
          }
          {
            loadmore === true && <p>{loadmoreSuccess}</p>
          }
          {
            loadmore === false && <p>{loadmoreError}</p>
          }
        </div>
      </div>
    )
  }
}
