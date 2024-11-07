import React from 'react'
import Header from './Header'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setMenuIndex } from '@/redux/reducer/global'
import Image from 'next/image'
import IcLogo from "../../public/icLogo.png"
function Drawer() {
    const dispatch  = useDispatch()
    const onChangeMenu = (index) =>{
        dispatch(setMenuIndex(index))
    }
  return (
    <div className='min-h-svh p-4 w-auto bg-surfaceContainer shadow-md'>
        <Image 
        src={IcLogo}
        width={128}
        height={128}
        alt='logo'
        />
        <div className='mt-8 flex flex-col'>
         <Button
         className='
         font-semibold
         text-primary'
         onClick={()=> onChangeMenu(0)}
         >Dashboard</Button>
         <Button 
         onClick={()=> onChangeMenu(1)}
         className='
         font-semibold
         text-primary
         mt-4
         '>Laporan Lalin</Button>
         <Button 
         onClick={()=> onChangeMenu(2)}
         className='
         font-semibold
         text-primary
         mt-4
         '>Master Gerbang</Button>
        </div>
    </div>
  )
}

export default Drawer