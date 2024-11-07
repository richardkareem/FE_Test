import { Button, Input } from '@mui/material'
import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import BtnCustom from './BtnCustom';

export const TrafficReport = () => {
    const [filterIndex, setFilterIndex] = useState(0)

    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Year',
            selector: row => row.year,
        },
    ];
    
    const data = [
          {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]
  return (
    <>
        <h6 className='font-bold'>Laporan Lalin Per Hari</h6>
        <div className='mt-2'>
            <div className='flex gap-2 items-center'>
                <Input placeholder='Search' />
                <Input placeholder='Tanggal' />
            </div>
            <div className='flex gap-2 items-center mt-2'>
                <Button>Filter</Button>
                <Button>Reset</Button>
            </div>
        </div>
        <div className='mt-4'>
            <div className='flex gap-2'>
               <BtnCustom onClick={()=>{}} title={"Total Tunai"} />   
               <BtnCustom onClick={()=>{}} title={"Total E-toll"} />
               <BtnCustom onClick={()=>{}} title={"Total Flo"} />              
            </div>
        <DataTable 
            className='mt-4'
            columns={columns}
            data={data}
            />
        </div>
    </>
  )
}
