"use client";

import { Button, Typography } from "@mui/material";
import React from "react";

export type ButtonEditDataProps = {
  text?: React.ReactNode | string;
  others?: any;
  onClick?: () => void;
  disable?: boolean;
};

const ButtonEditData: React.FC<ButtonEditDataProps> = ({
  others,
  onClick,
  disable,
  text = "Save",
}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      disabled={disable}
      {...others}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      <Typography>{text}</Typography>
    </Button>
  );
};

export default ButtonEditData;
