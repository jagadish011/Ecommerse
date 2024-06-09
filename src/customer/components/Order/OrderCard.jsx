import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/account/order/${5}`)} className="mt-5 p-5 shadow-lg rounded-s-md">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p>Girl T-Shirt</p>
              <p className="opacity-50 text-xs font-semibold">size: s</p>
              <p className="opacity-50 text-xs font-semibold">colour: red</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>₹ 4500</p>
        </Grid>
        <Grid item xs={4}>
          {true && <div>
            <p>
                <AdjustIcon sx={{width:"15px", height:"15px"}} className="text-green-500 mr-2"/>
              <span>Delivered on Mar 11</span>
            </p>
            <p className="text-xs">
                Your item has been delivered
            </p>
            </div>}
          {false && (
            <p>
                <AdjustIcon />
              <span>Expected delivery on Mar 12</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
