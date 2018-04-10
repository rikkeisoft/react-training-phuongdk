import React from 'react'
import {Link} from 'react-router-dom'
import loadingicon from '../loadingicon.gif'
function Tablecontent (props) {
  return (
    <div className='page-section-wrap'>
      {
        props.home &&
        <table className='table table-bordered table-hover'>
          <tbody>
            <tr>
              <td className='info'>Application Name</td>
              <td className='content'>{props.home.app_name}</td>
            </tr>
            <tr>
              <td className='info'>Description</td>
              <td className='content'>{props.home.description}</td>
            </tr>
            <tr>
              <td className='info'>Copyright</td>
              <td className='content'>{props.home.copyright}</td>
            </tr>
          </tbody>
        </table>
      }
      {
        props.loading && props.loading === true &&
        <div className='loading-icon-wrap'>
          <img src={loadingicon} alt='loading icon' />
        </div>
      }
      {
        props.movies && props.movies !== null
          ? props.movies.map((movie, key) =>
            <div className='movie-content-wrap' key={key}>
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
          : <div className='movie-content-wrap'>{props.searchmessage}</div>
      }
      {
        props.detail && props.detail !== null
          ? <div className='movie-content-wrap'>
            <div className='poster'>
              <img src={props.detail.Poster} alt='Poster' />
            </div>
            <div>
              <p>{props.detail.Title}</p>
              <p>Publish in <strong>{props.detail.Year}</strong></p>
              <p>Movie Type: {props.detail.Rated}</p>
              <p>Genre: {props.detail.Genre}</p>
              <p>Actor: {props.detail.Actors}</p>
              <p>Language: {props.detail.Language}</p>
              <p>Plot: {props.detail.Plot}</p>
              <p>Production: {props.detail.Production}</p>
              <p>Awards: {props.detail.Awards}</p>
            </div>
          </div>
          : <div>{props.detailmessage}</div>
      }
      {
        props.info &&
        <table className='table table-bordered table-hover'>
          <tbody>
            <tr>
              <td className='info'>Application Name</td>
              <td className='content'>{props.info.app_name}</td>
            </tr>
            <tr>
              <td className='info'>Description</td>
              <td className='content'>{props.info.app_description}</td>
            </tr>
            <tr>
              <td className='info'>Author</td>
              <td className='content'>{props.info.author}</td>
            </tr>
            <tr>
              <td className='info'>Division</td>
              <td className='content'>{props.info.division}</td>
            </tr>
          </tbody>
        </table>
      }
    </div>
  )
}
export default Tablecontent
