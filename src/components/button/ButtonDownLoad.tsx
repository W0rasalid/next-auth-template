"use client";

import { Button, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import React from "react";

export type ButtonDownloadProps = {
  text?: React.ReactNode | string;
  sx?: SxProps;
  others?: any;
  onClick?: () => void;
  disable?: boolean;
};

const ButtonDownload: React.FC<ButtonDownloadProps> = ({
  text = "Download",
  sx,
  others,
  onClick,
  disable,
}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      disabled={disable}
      sx={{
        color: "white",
        ...sx,
      }}
      {...others}
      onClick={onClick}
    >
      <FileDownloadOutlinedIcon />
      <Typography>{text}</Typography>
    </Button>
  );
};

export default ButtonDownload;
