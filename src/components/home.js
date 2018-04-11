import React from 'react'
import config from '../libs/config'
import Breadcrumbs from '../partials/breadcrumbs'

function Home () {
  const { page: { home: { appName, description, copyright } } } = config
  return (
    <div className='home-wrapper component-wrapper'>
      <Breadcrumbs home={config.page.home} />
      <div className='home-content block-content'>
        <div className='page-section-wrap'>
          <table className='table table-bordered table-hover'>
            <tbody>
              <tr>
                <td className='info'>Application Name</td>
                <td className='content'>{appName}</td>
              </tr>
              <tr>
                <td className='info'>Description</td>
                <td className='content'>{description}</td>
              </tr>
              <tr>
                <td className='info'>Copyright</td>
                <td className='content'>{copyright}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
export default Home
