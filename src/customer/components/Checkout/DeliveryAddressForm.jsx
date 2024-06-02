import React from 'react'
import Grid from '@mui/material/Grid'
import AddressCard from '../AddressCard/AddressCard'
import { Box, Button, TextField } from '@mui/material'

const DeliveryAddressForm = () => {
  return (
    <div>
     <Grid container spacing={4}>
        <Grid item xs={12} lg={5} className='border rounded-e-md shadow-md h-[30rem] overflow-y-scroll'>
          <div className='p-5 py-7 border-b cursor-pointer'>
            <AddressCard />
            <Button sx={{mt:2, bgcolor:'#9155fd', color:'white', ":hover":{bgcolor:'blue', color:'white'} }}>Deliver Here</Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={7} className='pb-6'>
          <Box className='border rounded-s-md shadow-md  p-5'>
            <form action="">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} >
                  <TextField
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6} >
                  <TextField
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="given-name"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6} >
                  <TextField
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6} >
                  <TextField
                    id="state/province/region"
                    name="state/province/region"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="given-name"
                  />
              </Grid>
                <Grid item xs={12} sm={6} >
                  <TextField
                    id="zip/postal-code"
                    name="zip/postal-code"
                    label="Zip/Postal Code"
                    fullWidth
                    autoComplete="shipping postal-code"
                    type="number"
                  />
                </Grid>
                <Grid item xs={12} sm={6} >
                  <TextField
                    id="phone number"
                    name="phone number"
                    label="Phone Number"
                    fullWidth
                    autoComplete="given-name"
                    type="number"
                  />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button sx={{bgcolor:'#9155fd', color:'white', py:1, ":hover":{bgcolor:'blue', color:'white'} }} type="submit" variant="contained" >Deliver Here</Button>
              </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default DeliveryAddressForm