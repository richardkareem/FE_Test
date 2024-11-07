import React from 'react'

const BtnCustom = ({title, onClick}) => {
  return (
    <div 
    onClick={onClick}
    className='bg-primary text-onPrimary rounded-lg p-2 hover:cursor-pointer hover:bg-primaryContainer hover:text-onPrimaryContainer '>
    {title}
    </div> 
  )
}

export default BtnCustom