import { Button, Input, InputLabel } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import IcLogo from "../../../public/icLogo.png"
function LoginPage() {
  //miawmiawmiawmiaw
  return (
    <div className='flex justify-center items-center flex-col min-h-svh w-svw'>
      <div className='flex flex-col bg-surfaceVariant w-96 bg- p-4 gap-2 shadow-sm rounded-md'>
        <Image 
        className='self-center'
          width={256}
          height={256}
          src={IcLogo}
          alt='logo'
        />
        <Input 
          color='primary'
          placeholder='Email' title='Email' />
        <Input 
          placeholder='Password' 
          type='password' />
          <Link 
           className='self-end'
           href={'/'} >
            <Button 
            color='info'
            className='mt-2'
            >Login</Button>
          </Link>
        
      </div>
      
    </div>
  )
}

export default LoginPage
