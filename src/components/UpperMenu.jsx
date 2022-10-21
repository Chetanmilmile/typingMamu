import React from 'react'

const UpperMenu = ({countDown}) => {
  return (
    <div className='uper-menu'>
      <div classNmae='counter'>{countDown}s </div>
         <div className='time'>15s</div>
         <div className='time'>40s</div>
         <div className='time'>80s</div>
    </div>
  )
}

export default UpperMenu;