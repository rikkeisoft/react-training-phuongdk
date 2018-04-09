import React, { Component } from 'react'
import config from '../config'
import Breadcrumbs from '../partials/breadcrumbs'
import Tablecontent from '../partials/tablecontent'

export default class Info extends Component {
  render () {
    return (
      <div className='info-wrapper component-wrapper'>
        <Breadcrumbs title={config.page.info.title} color={config.page.info.color} bgcolor={config.page.info.bgcolor} />
        <div className='info-content block-content'>
          <div className='img-wrapper'>
            <img src={config.page.info.logo} alt='logo' />
          </div>
          <Tablecontent info={config.page.info} />
        </div>
      </div>
    )
  }
}
