import React from 'react'
import { Site } from '../components'
import { News } from '../containers'

const All = () => {
  return (
    <div className='w-full space-y-5 pb-6 max-w-[630px]'>
      <Site />
      <News />
    </div>
  )
}

export default All