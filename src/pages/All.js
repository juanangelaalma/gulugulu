import React from 'react'
import { Site } from '../components'
import { News, Images, Videos } from '../containers'

const All = () => {
  return (
    <div className='w-full space-y-12 pb-6 max-w-[630px]'>
      <Site />
      <News />
      <Images />
      {/* <Videos /> */}
    </div>
  )
}

export default All