import React from 'react'
import config from '../libs/config'

function MovieLogo () {
    return (
        <div className='img-wrapper'>
            <img src={config.page.info.logo} alt='logo' />
        </div>
    )
}
export default MovieLogo