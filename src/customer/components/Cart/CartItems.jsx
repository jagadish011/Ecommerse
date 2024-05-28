import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
const CartItems = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] lg:w-[9rem] h-[5rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Women fit and flare dark green</p>
          <p className="text-gray-500">Size: M, Green</p>
          <p className="text-gray-500 mt-2">Seller: butterfly</p>
          <div className="flex space-x-5 items-center  text-gray-900 pt-6">
            <p className="font-semibold">₹ 4000</p>
            <p className="opacity-60 line-through">8000</p>
            <p className="text-green-500 font-semibold ">50% off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex item-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton sx={{ color: "red" }}>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3</span>
          <IconButton sx={{ color: "green" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button variant="outlined" startIcon={<DeleteIcon />}>
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
