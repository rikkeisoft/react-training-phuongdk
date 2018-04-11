import React from 'react'
import config from '../libs/config'
import Breadcrumbs from '../partials/breadcrumbs'
import MovieLogo from '../partials/movielogo'

function Info () {
  const { page: { info: { appName, appDescription, author, division } } } = config
  return (
    <div className='info-wrapper component-wrapper'>
      <Breadcrumbs info={config.page.info} />
      <div className='info-content block-content'>
        <MovieLogo />
          <div className='page-section-wrap'>
        <table className='table table-bordered table-hover'>
          <tbody>
            <tr>
              <td className='info'>Application Name</td>
              <td className='content'>{appName}</td>
            </tr>
            <tr>
              <td className='info'>Description</td>
              <td className='content'>{appDescription}</td>
            </tr>
            <tr>
              <td className='info'>Author</td>
              <td className='content'>{author}</td>
            </tr>
            <tr>
              <td className='info'>Division</td>
              <td className='content'>{division}</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}
export default Info
