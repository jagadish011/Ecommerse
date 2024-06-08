import { Step, StepLabel, Stepper } from '@mui/material'
import { color } from 'framer-motion'
import React from 'react'

const steps = ["Placed", "Order Confirmed", "Shipped", "Out For Delivery", "Delivered"]
const OrderTracter = ({activeStep}) => {
  return (
    <div className='w-full py-7'>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel sx={{color:"#9155fd", fontWeight:"bold", fontSize:"1.2rem"}}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
    </div> 
  )
}

export default OrderTracter