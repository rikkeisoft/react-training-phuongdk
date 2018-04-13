import React from 'react'
import {Link} from 'react-router-dom'
import LoadingIndicator from './loadingindicator'

function Searchcontent (page) {
  return (
    <div className='page-section-wrap'>
      <LoadingIndicator icon={page.loading} />
      {
        page.movies && page.movies.length > 0
          ? page.movies.map((movie, key) =>
            <div className='movie-content-wrap animated fadeIn' key={key} style={{WebkitAnimationDuration: '2s'}}>
              <div className='row'>
                <div className='poster col-md-5 col-12'>
                  <img src={movie.Poster} alt='Poster' />
                </div>
                <div className='movie-info col-md-7 col-12'>
                  <p>{movie.Title}</p>
                  <p>Publish in <strong>{movie.Year}</strong></p>
                  <p>Movie Type: {movie.Type}</p>
                  <p>IMDB ID: {movie.imdbID}</p>
                  <p>
                    <Link className='btn-moviedetail' to={`/detail/${movie.imdbID}`}>Read more</Link>
                  </p>
                </div>
              </div>
            </div>
          )
          : <div className='movie-content-wrap'>{page.searchmessage}</div>
      }
    </div>
  )
}
export default Searchcontent
