import { Grid } from '@mui/material'
import React from 'react'
import OrderCard from './OrderCard'

const orderStatus=[
    {label:"On the Way", value:"On_the_Way"},
    {label:"Delivered", value:"Delivered"},
    {label:"Cancelled", value:"Cancelled"},
    {label:"Return", value:"Return"},
]
const Order = () => {
  return (
    <div className='px-5 lg:px-20'>
        <Grid container sx={{justifyContent:'space-between'}}>
            <Grid item xs={2.5}>
                <div className='h-auto shadow-lg bg-white p-5 sticky top-5'>
                    <h1 className='font-bold text-lg'>Filter</h1>
                    {orderStatus.map((option)=>(
                        <div className='space-y-1 mt-6'>
                        <h1 className='font-semibold'>Order Status</h1>
                        <div className='flex items-center '>
                            <input defaultValue={option.value} type="checkbox" className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500' />
                        <label htmlFor={option.value} className="ml-3 text-sm font-medium text-gray-900">{option.label}</label>
                        </div>
                    </div>
                    ))}
                </div>
            </Grid>
            <Grid item xs={9.5}>
                {[1,1,1].map((item)=><OrderCard />)}
            </Grid>
        </Grid>
    </div>
  )
}

export default Order