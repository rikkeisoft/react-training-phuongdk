import React from 'react'
import config from '../config'
import Breadcrumbs from '../partials/breadcrumbs'
import Tablecontent from '../partials/tablecontent'

function Home () {
  return (
    <div className='home-wrapper component-wrapper'>
      <Breadcrumbs title={config.page.home.title} color={config.page.home.color} bgcolor={config.page.home.bgcolor} />
      <div className='home-content block-content'>
        <Tablecontent home={config.page.home} />
      </div>
    </div>
  )
}
export default Home
