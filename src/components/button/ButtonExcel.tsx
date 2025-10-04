'use client';

import { Button, SxProps } from '@mui/material';
import React from 'react';

// icons
import { FileExcelOutlined } from '@ant-design/icons';

export type ButtonExcelProps = {
  /**
   * render เป็น component (ReactNode)
   */
  children: React.ReactNode;
  sx?: SxProps;
  others?: any;
  onClick?: () => void;
};

const ButtonExcel: React.FC<ButtonExcelProps> = ({ children, sx, others, onClick }) => {
  return (
    <Button
      variant="contained"
      startIcon={<FileExcelOutlined />}
      sx={{
        background: 'linear-gradient(180deg, #2E9326 0%, #2E9326 100%)',
        color: 'white',
        ...sx
      }}
      {...others}
      onClick={onClick}
    >
      <React.Fragment>{children}</React.Fragment>
    </Button>
  );
};

export default ButtonExcel;
