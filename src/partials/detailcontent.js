import React from 'react'

function Detailcontent (page) {
  return (
    <div className='page-section-wrap'>
        {
        page.detail && page.detail !== null
         ? <div className='movie-content-wrap'>
            <div className='poster'>
              <img src={page.detail.Poster} alt='Poster' />
            </div>
            <div>
              <p>{page.detail.Title}</p>
              <p>Publish in <strong>{page.detail.Year}</strong></p>
              <p>Movie Type: {page.detail.Rated}</p>
              <p>Genre: {page.detail.Genre}</p>
              <p>Actor: {page.detail.Actors}</p>
              <p>Language: {page.detail.Language}</p>
              <p>Plot: {page.detail.Plot}</p>
              <p>Production: {page.detail.Production}</p>
              <p>Awards: {page.detail.Awards}</p>
            </div>
          </div>
         : <div>{page.detailmessage}</div>
      }
    </div>
  )
}
export default Detailcontent
