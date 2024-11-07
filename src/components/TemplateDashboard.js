import React from 'react'
import Drawer from './Drawer'
import Header from './Header'

function TemplateDashboard({children}) {
  return (
    <div className="flex">
    <Drawer/>
    <div className="w-full">
      <Header/>
      <div className='p-4'>
        <div className='p-4 w-full h-full bg-surfaceContainerHigh shadow-md  outline outline-0 outline-outlineVariant'>
         {children}
        </div>
      </div>
    </div>

  </div>
  )
}

export default TemplateDashboard