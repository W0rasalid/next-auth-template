"use client";

import { Button, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import React from "react";

export type ButtonClearProps = {
  text?: React.ReactNode | string;
  disable?: boolean;
  formId?: string;
  sx?: SxProps;
  others?: any;
  onClick?: () => void;
};

const ButtonClear: React.FC<ButtonClearProps> = ({
  others,
  onClick,
  formId,
  disable = false,
  text = "Clear",
}) => {
  return (
    <Button
      form={formId}
      type="reset"
      disabled={disable}
      variant="contained"
      color="warning"
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

export default ButtonClear;
