import { Button, Input } from '@mui/material'
import { PieChart } from '@mui/x-charts';
import { BarChart } from '@mui/x-charts/BarChart';
import React from 'react'
import { FaFilter } from "react-icons/fa6";

function DashboardComponent() {
  return (
    <div
    className=''
    >
        <h6 className='font-bold'>Dashboard</h6>
        <div className='mt-2'>
          <div className='flex items-center gap-2'>
           <Input type="date" />
           <Button 
           startIcon={<FaFilter color='#FFF' size={16} />}
           variant='contained'
           
           >
            Filter
           </Button>
          </div>

          <div className='flex mt-4'>
            <BarChart
            series={[
              { data: [35, 44, 24, 34] },
              { data: [51, 6, 49, 30] },
              { data: [15, 25, 30, 50] },
              { data: [60, 50, 15, 25] },
              ]}
              height={290}
              xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
              title='Jumlah Lalin'
            />
                      <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: 'series A' },
                    { id: 1, value: 15, label: 'series B' },
                    { id: 2, value: 20, label: 'series C' },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
          <div className='flex mt-4'>
            <BarChart
            series={[
              { data: [35, 44, 24, 34] },
              { data: [51, 6, 49, 30] },
              { data: [15, 25, 30, 50] },
              { data: [60, 50, 15, 25] },
              ]}
              height={290}
              xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
              title='Jumlah Lalin'
            />
                      <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: 'series A' },
                    { id: 1, value: 15, label: 'series B' },
                    { id: 2, value: 20, label: 'series C' },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
        </div>
    </div>
  )
}

export default DashboardComponent