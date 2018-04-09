import React from 'react'
function breadcrumbs (props) {
  return (
    <div style={{backgroundColor: props.bgcolor}} className='breadcrumbs'>
      <h1 style={{color: props.color}} className='title'>{props.title}</h1>
    </div>
  )
}
export default breadcrumbs
