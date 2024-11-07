import React from 'react'

function Header() {
  return (
    <div 

    className='pr-8 py-4 bg-surfaceContainer flex justify-end shadow-sm'>
        <div className='flex items-center gap-4'>
            <h6 className='font-medium hover:cursor-pointer'>Profile</h6>
            <h6 className='font-medium hover:cursor-pointer'>Setting</h6>
        </div>
    </div>
  )
}

export default Header