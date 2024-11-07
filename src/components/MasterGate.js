import { Button, Input } from '@mui/material';
import React from 'react'
import DataTable from 'react-data-table-component';

function MasterGate() {
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
     <h6 className='font-bold'>Master Data Gerbang</h6>
     <div className='flex w-full justify-between items-center'>
         <Input placeholder='search' />
         <Button>Add Data</Button>
     </div>
    <DataTable 
    className='mt-4'
    columns={columns}
    data={data}
    />
   </>
  )
}

export default MasterGate