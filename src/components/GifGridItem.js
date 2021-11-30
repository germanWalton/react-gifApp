import React from 'react'

const GifGridItem = ({title,url}) => {


  return (
    <div className='card animate__animated animate__zoomIn'>
      <img className=""src={url} alt={title} />
      <p className="p-3">{title}</p>
    </div>
  )
}

export default GifGridItem