import React from 'react'
import BottomSection from './BottomSection'
import UpperSection from './UpperSection'

function Card() {
  return (
    <div className='w-[400px] h-[550px]'>
      <UpperSection />
      <BottomSection />
    </div>
  )
}

export default Card
