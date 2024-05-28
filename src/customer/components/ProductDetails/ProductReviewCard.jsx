import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={2}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ bgcolor: "#9155fd", width: 56, height: 56 }}
            >
              R
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-xl">Ram</p>
              <p className="text-gray-500 my-2">April 05, 2022</p>
            </div>
          </div>
          <Rating value={4.5} name="half-rating" precision={0.5} readOnly />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            quibusdam repudiandae iste voluptatum molestias eveniet magni amet
            fuga
          </p>
        </Grid>

        
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
