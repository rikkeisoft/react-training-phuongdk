import React from 'react'
import loadingicon from '../images/loadingicon.gif'

function LoadingIndicator (loading) {
  return (
    loading.icon && loading.icon === true
      ? <div className='loading-icon-wrap'>
        <img src={loadingicon} alt='loading icon' />
      </div>
      : ''
  )
}
export default LoadingIndicator
