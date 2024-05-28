import React from 'react'
import Grid from '@mui/material/Grid'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from '@mui/material'

const DeliveryAddressForm = () => {
  return (
    <div>
     <Grid container spacing={4}>
        <Grid className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
          <div className='p-5 py-7 border-b cursor-pointer'>
            <AddressCard />
            <Button sx={{mt:2}}>Deliver Here</Button>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default DeliveryAddressForm