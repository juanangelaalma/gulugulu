import React from 'react'
import { Site } from '../components'
import { News, Images } from '../containers'

const All = () => {
  return (
    <div className='w-full space-y-12 pb-6 max-w-[630px]'>
      <Site />
      <News />
      <Images />
    </div>
  )
}

export default All