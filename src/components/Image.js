import React from 'react'

const Image = ({ url }) => {
  return (
    <img className="h-full w-auto object-cover object-center" src={url} />
  )
}

export default Image